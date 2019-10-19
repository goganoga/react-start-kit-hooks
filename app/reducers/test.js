import {boundApiReducer} from './common';
import { actions } from 'actions';

export const test_struct = {
    pending: null,
    data: []
}

const test = boundApiReducer(actions.FETCH_DATA, new Array, (action) => {
    let { body: {_embedded: { episodes } } } = action.data;
    return episodes;
});

export default test;