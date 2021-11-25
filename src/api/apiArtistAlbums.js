import {
  artistAlbumsLoading,
  artistAlbumsSuccess,
  artistAlbumsError,
} from '../state/artistAlbums/artistAlbumsActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetArtistAlbums = (id) => {
  return (dispatch) => {
    dispatch(artistAlbumsLoading());
    axiosApiMusic
      .get(`/artist/${id}/albums`)
      .then((res) => {
        dispatch(artistAlbumsSuccess(res.data.data));
        return res;
      })
      .catch((error) => dispatch(artistAlbumsError(error)));
  };
};

export default apiGetArtistAlbums;
