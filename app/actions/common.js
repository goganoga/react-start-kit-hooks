'use strict';

import superagent from 'superagent';

export const get  = (...args) => request('get',  ...args);
export const post = (...args) => request('post', ...args);

get.makeQueryString = 'makeQueryString';

async function request(method, actions, dispatch, url, data, ...otherArgs) {

    dispatch({ type: actions.REQUEST, params: otherArgs || [] });

    if (method == 'get') {
        let ts = new Date().getTime();
        let symbol = ~url.indexOf('?') ? '&' : '?';
        Object.assign(data, {ts});
    }

    try {
        let resp = await superagent[method](url)[method == 'get' ? 'query' : 'send'](data);
        dispatch({
            type: actions.SUCCESS,
            data: resp,
            params: otherArgs || []
        });
        return resp;
    } catch(err) {
        dispatch({
            type: actions.FAILURE,
            err,
            params: otherArgs || []
        });
        return err;
    }
}

export function actionCreator(type, data, params = []) {
    return { type, data, params }
}

export function ApiActions(...actions) {
    actions.forEach(config => {
        let [ name, traceStatus ] = typeof config == 'string'
            ? [config]
            : config;
        this[name] = new ApiAction(name, traceStatus);
    })
}

export function ApiAction(name, traceStatus = 0) {
    this.REQUEST = `${name}_REQUEST`;
    this.SUCCESS = `${name}_SUCCESS`;
    this.FAILURE = `${name}_FAILURE`;
    this.RESET   = `${name}_RESET`;
    if (traceStatus) {
        this.STATUS  = `${name}_STATUS`;
    }
}