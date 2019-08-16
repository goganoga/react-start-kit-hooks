export const test = (state, action) => {
    switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
        let { body: {_embedded: { episodes } } } = action.data;
        return episodes;
    case 'FETCH_DATA_FAILURE':
        return [1, 2, 3, 4, 5];
    default:
        return state;
    }
};