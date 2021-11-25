/**
 * Jimmy Jung - 07/11/2021
 * Chart artists reducer function
 */

/**
 * Import chart tracks types
 */
import chartArtistsTypes from './chartArtistsTypes';

/**
 * state by default
 */
const initialStateChartTracks = {
  isLoading: false,
  top: [],
  error: '',
};

const chartArtistsReducer = (state = initialStateChartTracks, action) => {
  if (action.type === chartArtistsTypes.LOAD_CHART_ARTISTS) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === chartArtistsTypes.LOAD_CHART_ARTISTS_SUCCESS) {
    const top = action.payload.map((artist) => ({
      ...artist,
      isLiked: false,
    }));

    return {
      ...state,
      isLoading: false,
      top,
    };
  }
  if (action.type === chartArtistsTypes.LOAD_CHART_ARTISTS_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  if (action.type === chartArtistsTypes.LIKE) {
    const top = state.top.map((artist) => {
      if (artist.id === action.payload) {
        return { ...artist, isLiked: !artist.isLiked };
      }
      return artist;
    });

    return {
      ...state,
      top,
    };
  }

  return state;
};

export default chartArtistsReducer;
