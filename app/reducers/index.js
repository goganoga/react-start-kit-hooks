import combineReducers from 'utils/combinereducers';
import {test} from 'reducers/test';

export const initialState = {
    test: {
        pending: null,
        data: []
    }
};

export default combineReducers({
    test,
});