import { ApiActions, get } from './common';

export const actions = new ApiActions(
    'FETCH_DATA',
);

const API_URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

export const fetchDataAction = dispatch => get(actions.FETCH_DATA, dispatch, API_URL);