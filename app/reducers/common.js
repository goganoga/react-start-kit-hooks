export const boundApiReducer = ( type, prepare = action => action.data, extendKey = null ) => {
    return apiReducer.bind(null, type, prepare, extendKey);
}

const apiReducer = (type, prepare, extendKey, state, action) => {
    switch (action.type) {
    case type.REQUEST:
        var data = {
            pending: true,
            data: state.data
        };
        return typeof extendKey === 'function' ? Object.assign({}, state, { [extendKey(action)]: data }) : data;
    case type.SUCCESS:
        var data = {
            pending: false,
            data: prepare(action)
        };
        return typeof extendKey === 'function' ? Object.assign({}, state, { [extendKey(action)]: data }) : data;
    case type.FAILURE:
        var data = {
            pending: null,
            data: undefined
        };
        return typeof extendKey === 'function' ? {} : data;
    case type.RESET:
        var data = {
            pending: null,
            data: {}
        };
        return typeof extendKey === 'function' ? {} : data;
    default:
        return state;
    }
}