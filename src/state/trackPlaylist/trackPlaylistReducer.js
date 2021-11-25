import trackPlaylistTypes from './trackPlaylistTypes';

const initialStateTrackPlaylist = {
  isLoading: false,
  playlist: [],
  error: '',
};

const trackPlaylistReducer = (state = initialStateTrackPlaylist, action) => {
  if (action.type === trackPlaylistTypes.LOAD_TRACK_PLAYLIST) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === trackPlaylistTypes.LOAD_TRACK_PLAYLIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      playlist: action.payload,
    };
  }
  if (action.type === trackPlaylistTypes.LOAD_TRACK_PLAYLIST_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};

export default trackPlaylistReducer;
