import {
  searchAlbumLoading,
  searchAlbumSuccess,
  searchAlbumError,
} from '../state/search/searchAlbum/searchAlbumActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetSearchAlbum = (search) => {
  return (dispatch) => {
    dispatch(searchAlbumLoading());
    axiosApiMusic
      .get(`/search/album?q=${search}&limit=3`)
      .then((res) => {
        dispatch(searchAlbumSuccess(res.data.data));
        return res;
      })
      .catch((error) => dispatch(searchAlbumError(error)));
  };
};

export default apiGetSearchAlbum;
