import {
  singleRadioLoading,
  singleRadioSuccess,
  singleRadioError,
} from '../state/singleRadio/singleRadioActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetSingleRadio = (id) => {
  return (dispatch) => {
    dispatch(singleRadioLoading());
    axiosApiMusic
      .get(`/radio/${id}/tracks`)
      .then((res) => {
        dispatch(singleRadioSuccess(res.data));
        return res;
      })
      .catch((error) => dispatch(singleRadioError(error)));
  };
};

export default apiGetSingleRadio;
