import {
  genderLoading,
  genderSuccess,
  genderError,
} from '../state/gender/genderActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetGender = () => {
  return (dispatch) => {
    dispatch(genderLoading());
    axiosApiMusic
      .get('/genre')
      .then((res) => {
        dispatch(genderSuccess(res.data.data));
        return res;
      })
      .catch((error) => dispatch(genderError(error)));
  };
};

export default apiGetGender;
