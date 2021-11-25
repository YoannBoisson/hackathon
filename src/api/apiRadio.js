import {
  radioLoading,
  radioSuccess,
  radioError,
} from '../state/radio/radioActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetRadio = () => {
  return (dispatch) => {
    dispatch(radioLoading());
    axiosApiMusic
      .get('/radio/top')
      .then((res) => {
        dispatch(radioSuccess(res.data.data));
        return res;
      })
      .catch((error) => dispatch(radioError(error)));
  };
};

export default apiGetRadio;
