import {
  trackLoading,
  trackSuccess,
  trackError,
} from '../state/track/trackActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetTrack = (id) => {
  return (dispatch) => {
    dispatch(trackLoading());
    axiosApiMusic
      .get(`/track/${id}`)
      .then((res) => {
        dispatch(trackSuccess(res.data));
        return res;
      })
      .catch((error) => dispatch(trackError(error)));
  };
};

export default apiGetTrack;
