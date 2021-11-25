import {
  searchTrackLoading,
  searchTrackSuccess,
  searchTrackError,
} from '../state/search/searchTrack/searchTrackActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetSearchTrack = (search) => {
  return (dispatch) => {
    dispatch(searchTrackLoading());
    axiosApiMusic
      .get(`/search/track?q=${search}&limit=3`)
      .then((res) => {
        dispatch(searchTrackSuccess(res.data.data));
        return res;
      })
      .catch((error) => dispatch(searchTrackError(error)));
  };
};

export default apiGetSearchTrack;
