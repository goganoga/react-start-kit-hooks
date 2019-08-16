import combineReducers from 'utils/combinereducers';

import {test} from 'reducers/test';

export const initialState = {
    test: []
};

export default combineReducers({
    test,
});