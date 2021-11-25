import artistsRelatedTypes from './artistsRelatedTypes';

export const artistsRelatedLoading = () => {
  return {
    type: artistsRelatedTypes.LOAD_ARTISTS_RELATED,
  };
};

export const artistsRelatedSuccess = (data) => {
  return {
    type: artistsRelatedTypes.LOAD_ARTISTS_RELATED_SUCCESS,
    payload: data,
  };
};

export const artistsRelatedError = (error) => {
  return {
    type: artistsRelatedTypes.LOAD_ARTISTS_RELATED_ERROR,
    payload: error,
  };
};
