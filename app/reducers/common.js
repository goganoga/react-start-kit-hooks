export const boundApiReducer = ( type, prepare = action => action.data, extendKey = null ) => {
    return apiReducer.bind(null, type, prepare, extendKey);
}

var data = {};

const apiReducer = (type, prepare, extendKey, state = null, action) => {
    switch (action.type) {
    case type.REQUEST:
        data = {
            pending: true,
            data: state.data
        };
        return typeof extendKey === 'function' ? Object.assign({}, state, { [extendKey(action)]: data }) : data;
    case type.SUCCESS:
        data = {
            pending: false,
            data: prepare(action)
        };
        return typeof extendKey === 'function' ? Object.assign({}, state, { [extendKey(action)]: data }) : data;
    case type.FAILURE:
        data = {
            pending: null,
            data: undefined
        };
        return typeof extendKey === 'function' ? {} : data;
    case type.RESET:
        data = {
            pending: null,
            data: {}
        };
        return typeof extendKey === 'function' ? {} : data;
    default:
        return state;
    }
}