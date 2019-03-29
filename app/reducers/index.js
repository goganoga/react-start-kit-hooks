export const initialState = {
    test: []
};

export default (state, action) => {
    switch (action.type) {
    case 'FETCH_DATA':
        return { ...state, test: action.payload };
    default:
        return state;
    }
}