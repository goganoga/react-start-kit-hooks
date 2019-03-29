export const initialState = {
    test: []
};

export default (state, action) => {
    switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
        let { body: {_embedded: { episodes } } } = action.data;
        return { ...state, test: episodes };
    case 'FETCH_DATA_FAILURE':
        return { ...state, test: [1, 2, 3, 4, 5] };
    default:
        return state;
    }
}