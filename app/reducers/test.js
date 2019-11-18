import {boundApiReducer} from './common';
import { actions } from 'actions';

export const test_struct = {
    pending: null,
    data: []
}

const test = boundApiReducer(actions.FETCH_DATA, new Array, null, (action) => {
    let { _embedded: { episodes } } = action.data;
    return episodes;
});

export default test;