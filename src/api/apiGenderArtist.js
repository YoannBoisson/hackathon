import {
  genderArtistLoading,
  genderArtistSuccess,
  genderArtistError,
} from '../state/genderArtist/genderArtistActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetGenderArtist = (id) => {
  return (dispatch) => {
    dispatch(genderArtistLoading());
    axiosApiMusic
      .get(`/genre/${id}/artists`)
      .then((res) => {
        dispatch(genderArtistSuccess(res.data.data));
        return res;
      })
      .catch((error) => dispatch(genderArtistError(error)));
  };
};

export default apiGetGenderArtist;
