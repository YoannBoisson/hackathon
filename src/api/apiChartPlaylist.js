import {
  chartPlaylistLoading,
  chartPlaylistSuccess,
  chartPlaylistError,
} from '../state/chartPlaylist/chartPlaylistActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetChartPlaylist = () => {
  return (dispatch) => {
    dispatch(chartPlaylistLoading());
    axiosApiMusic
      .get('/chart/0/playlists?limit=5')
      .then((res) => {
        dispatch(chartPlaylistSuccess(res.data.data));
        return res;
      })
      .catch((error) => dispatch(chartPlaylistError(error)));
  };
};

export default apiGetChartPlaylist;
