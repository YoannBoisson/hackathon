import {
  chartAlbumLoading,
  chartAlbumSuccess,
  chartAlbumError,
} from '../state/chartAlbum/chartAlbumActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetChartAlbum = () => {
  return (dispatch) => {
    dispatch(chartAlbumLoading());
    axiosApiMusic
      .get('/chart?index=0&limit=10')
      .then((res) => {
        dispatch(chartAlbumSuccess(res.data.albums.data));
        return res;
      })
      .catch((error) => dispatch(chartAlbumError(error)));
  };
};

export default apiGetChartAlbum;
