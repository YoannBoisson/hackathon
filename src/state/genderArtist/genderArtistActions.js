import genderArtistTypes from './genderArtistTypes';

export const genderArtistLoading = () => {
  return {
    type: genderArtistTypes.LOAD_GENDER_ARTIST,
  };
};

export const genderArtistSuccess = (data) => {
  return {
    type: genderArtistTypes.LOAD_GENDER_ARTIST_SUCCESS,
    payload: data,
  };
};

export const genderArtistError = (error) => {
  return {
    type: genderArtistTypes.LOAD_GENDER_ARTIST_ERROR,
    payload: error,
  };
};

export const genderArtistsLike = (id) => {
  return {
    type: genderArtistTypes.LIKE,
    payload: id,
  };
};
