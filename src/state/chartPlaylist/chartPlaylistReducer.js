import chartPlaylistTypes from './chartPlaylistTypes';

const initialStateChartPlaylist = {
  isLoading: false,
  top: [],
  error: '',
};

const chartPlaylistReducer = (state = initialStateChartPlaylist, action) => {
  if (action.type === chartPlaylistTypes.LOAD_CHART_PLAYLIST) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === chartPlaylistTypes.LOAD_CHART_PLAYLIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      top: action.payload,
    };
  }
  if (action.type === chartPlaylistTypes.LOAD_CHART_PLAYLIST_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};

export default chartPlaylistReducer;
