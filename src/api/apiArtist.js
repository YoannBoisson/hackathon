import {
  artistLoading,
  artistSuccess,
  artistError,
} from '../state/artist/artistActions';
import { axiosApiMusic } from '../core/functions/apiHelper';

export const apiGetArtistInfos = (id) => {
  return (dispatch) => {
    dispatch(artistLoading());
    axiosApiMusic
      .get(`/artist/${id}`)
      .then((res) => {
        dispatch(artistSuccess(res.data));
        return res;
      })
      .catch((error) => dispatch(artistError(error)));
  };
};

export default apiGetArtistInfos;
