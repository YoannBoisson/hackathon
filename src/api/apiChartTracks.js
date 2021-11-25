import {
  chartTracksLoading,
  chartTracksSuccess,
  chartTracksError,
} from '../state/chartTracks/chartTracksActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetChartTracks = () => {
  return (dispatch) => {
    dispatch(chartTracksLoading());
    axiosApiMusic
      .get('/chart')
      .then((res) => {
        dispatch(chartTracksSuccess(res.data.tracks.data));
        return res;
      })
      .catch((error) => dispatch(chartTracksError(error)));
  };
};

export default apiGetChartTracks;
