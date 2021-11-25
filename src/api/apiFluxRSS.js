import { parseString } from 'xml2js';
import {
  rssLoading,
  rssSuccess,
  rssError,
} from '../state/fluxRSSmusicNews/rssActions';
import { axiosFluxRss } from '../core/functions/apiHelper';

const apiGetRss = () => {
  return (dispatch) => {
    dispatch(rssLoading());
    axiosFluxRss
      .get('/musique/feed')
      .then((res) => {
        parseString(res.data, (err, result) => {
          if (result) {
            dispatch(rssSuccess(result.rss.channel[0].item));
          }
        });
      })
      .catch((error) => dispatch(rssError(error)));
  };
};

export default apiGetRss;
