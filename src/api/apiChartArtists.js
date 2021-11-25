import {
  chartArtistsLoading,
  chartArtistsSuccess,
  chartArtistsError,
} from '../state/chartArtists/chartArtistsActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetChartArtists = () => {
  return (dispatch) => {
    dispatch(chartArtistsLoading());
    axiosApiMusic
      .get('/chart/0/artists')
      .then((res) => {
        dispatch(chartArtistsSuccess(res.data.data));
        return res;
      })
      .catch((error) => dispatch(chartArtistsError(error)));
  };
};

export default apiGetChartArtists;
