import {
  trackPlaylistLoading,
  trackPlaylistSuccess,
  trackPlaylistError,
} from '../state/trackPlaylist/trackPlaylistActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetTrackPlaylist = (id) => {
  return (dispatch) => {
    dispatch(trackPlaylistLoading());
    axiosApiMusic
      .get(`/playlist/${id}/tracks`)
      .then((res) => {
        dispatch(trackPlaylistSuccess(res.data));
        return res;
      })
      .catch((error) => dispatch(trackPlaylistError(error)));
  };
};

export default apiGetTrackPlaylist;
