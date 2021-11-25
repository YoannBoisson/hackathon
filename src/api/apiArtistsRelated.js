import {
  artistsRelatedLoading,
  artistsRelatedSuccess,
  artistsRelatedError,
} from '../state/artistsRelated/artistsRelatedActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetArtistsRelated = (id) => {
  return (dispatch) => {
    dispatch(artistsRelatedLoading());
    axiosApiMusic
      .get(`/artist/${id}/related`)
      .then((res) => {
        dispatch(artistsRelatedSuccess(res.data.data));
        return res;
      })
      .catch((error) => dispatch(artistsRelatedError(error)));
  };
};

export default apiGetArtistsRelated;
