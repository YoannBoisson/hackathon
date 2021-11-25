import rssTypes from './rssTypes';

export const rssLoading = () => {
  return {
    type: rssTypes.LOAD_RSS,
  };
};

export const rssSuccess = (data) => {
  return {
    type: rssTypes.LOAD_RSS_SUCCESS,
    payload: data,
  };
};

export const rssError = (error) => {
  return {
    type: rssTypes.LOAD_RSS_ERROR,
    payload: error,
  };
};
