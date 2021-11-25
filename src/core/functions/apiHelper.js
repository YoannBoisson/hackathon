import axios from 'axios';

const axiosApiMusicConfig = {
  baseURL: 'https://groove-station-node.herokuapp.com/https://api.deezer.com/',
};

const axiosFluxRssConfig = {
  baseURL:
    'https://groove-station-node.herokuapp.com/https://www.lesinrocks.com/',
};

export const axiosApiMusic = axios.create(axiosApiMusicConfig);
export const axiosFluxRss = axios.create(axiosFluxRssConfig);
