import trackPlaylistTypes from './trackPlaylistTypes';

export const trackPlaylistLoading = () => {
  return {
    type: trackPlaylistTypes.LOAD_TRACK_PLAYLIST,
  };
};

export const trackPlaylistSuccess = (data) => {
  return {
    type: trackPlaylistTypes.LOAD_TRACK_PLAYLIST_SUCCESS,
    payload: data,
  };
};

export const trackPlaylistError = (error) => {
  return {
    type: trackPlaylistTypes.LOAD_TRACK_PLAYLIST_ERROR,
    payload: error,
  };
};
