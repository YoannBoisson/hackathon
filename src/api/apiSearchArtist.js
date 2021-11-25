import {
  searchArtistLoading,
  searchArtistSuccess,
  searchArtistError,
} from '../state/search/searchArtist/searchArtistActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetSearchArtist = (search) => {
  // (id)
  return (dispatch) => {
    dispatch(searchArtistLoading());
    axiosApiMusic
      .get(`/search/artist?q=${search}&limit=3`)
      .then((res) => {
        dispatch(searchArtistSuccess(res.data.data));
        return res;
      })
      .catch((error) => dispatch(searchArtistError(error)));
  };
};

export default apiGetSearchArtist;
