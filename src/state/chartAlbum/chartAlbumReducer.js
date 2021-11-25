import chartAlbumTypes from './chartAlbumTypes';

const initialStateChartAlbum = {
  isLoading: false,
  top: [],
  error: '',
};

const chartAlbumReducer = (state = initialStateChartAlbum, action) => {
  if (action.type === chartAlbumTypes.LOAD_CHART_ALBUM) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === chartAlbumTypes.LOAD_CHART_ALBUM_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      top: action.payload,
    };
  }
  if (action.type === chartAlbumTypes.LOAD_CHART_ALBUM_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};

export default chartAlbumReducer;
