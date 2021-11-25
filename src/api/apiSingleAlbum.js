import {
  singleAlbumLoading,
  singleAlbumSuccess,
  singleAlbumError,
} from '../state/singleAlbum/singleAlbumActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetSingleAlbum = (id) => {
  return (dispatch) => {
    dispatch(singleAlbumLoading());
    axiosApiMusic
      .get(`/album/${id}`)
      .then((res) => {
        dispatch(singleAlbumSuccess(res.data));
        return res;
      })
      .catch((error) => {
        dispatch(singleAlbumError(error));
      });
  };
};

export default apiGetSingleAlbum;
