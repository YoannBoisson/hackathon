import singleAlbumTypes from './singleAlbumTypes';

const initialStateSingleAlbum = {
  isLoading: false,
  album: {},
  error: '',
};

const singleAlbumReducer = (state = initialStateSingleAlbum, action) => {
  if (action.type === singleAlbumTypes.LOAD_SINGLE_ALBUM) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === singleAlbumTypes.LOAD_SINGLE_ALBUM_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      album: action.payload,
    };
  }
  if (action.type === singleAlbumTypes.LOAD_SINGLE_ALBUM_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};

export default singleAlbumReducer;
