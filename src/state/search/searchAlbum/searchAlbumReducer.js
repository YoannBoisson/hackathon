import searchAlbumTypes from './searchAlbumTypes';

const initialStateSearchAlbum = {
  isLoading: false,
  albumFound: [],
  error: '',
};

const searchAlbumReducer = (state = initialStateSearchAlbum, action) => {
  if (action.type === searchAlbumTypes.LOAD_SEARCH_ALBUM) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === searchAlbumTypes.LOAD_SEARCH_ALBUM_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      albumFound: action.payload,
    };
  }

  if (action.type === searchAlbumTypes.LOAD_SEARCH_ALBUM_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};

export default searchAlbumReducer;
