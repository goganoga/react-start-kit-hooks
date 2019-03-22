const API_URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

export const fetchDataAction = async dispatch => {
  const data = await fetch(API_URL);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes
  });
};