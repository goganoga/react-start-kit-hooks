export const boundApiReducer = ( type, model, prepare = action => action.data ) => {
    return apiReducer.bind(null, type, model, prepare);
}

const apiReducer = (type, model, prepare, state, action) => {
    switch (action.type) {
    case type.REQUEST:
        return {
            pending: true,
            data: model
        };
    case type.SUCCESS:
        return {
            pending: false,
            data: prepare(action)
        };
    case type.FAILURE:
        return {
            pending: null,
            data: undefined
        };
    default:
        return state;
    }
}