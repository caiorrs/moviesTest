import axios, { AxiosResponse } from 'axios';
// @ts-ignore
import { API_TOKEN, API_URL } from 'react-native-dotenv';
import * as Types from './types';

const baseURL = API_URL;
const headers = {
  Authorization: `Bearer ${API_TOKEN}`,
};

const APIInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers,
});

class API {
  static getDiscoverMovies({page=1, language="en-US", with_genres}: Types.discoverType): Promise<AxiosResponse<Types.discoverResponse>> {
    return APIInstance.get('/discover/movie/', { params: { page, language, with_genres } });
  }

  static getTrending({ media_type="movie", time_window="week" }: Types.trendingType): Promise<AxiosResponse<Types.trendingResponse>> {
    return APIInstance.get(`trending/${media_type}/${time_window}`, {});
  }

  static getMoviesGenresList({language = 'en-US'}: Types.languageType): Promise<AxiosResponse<Types.genresListResponse>> {
    return APIInstance.get('genre/movie/list', {params: { language }});
  }

  static getMovieSearchResults({query, page = 1}: Types.searchType): Promise<AxiosResponse<Types.movieSearchResult>> {
    return APIInstance.get('search/movie', { params: { query, page } });
  }

  static getAPIConfiguration(): Promise<AxiosResponse<Types.configurationResponse>>{
    return APIInstance.get('configuration', {})
  }

  static getMovieDetails({movie_id, language = 'en-US'}: Types.movieDetails): Promise<AxiosResponse<Types.movieDetailsResponse>>{
    return APIInstance.get(`movie/${movie_id}`, { params: { language } })
  }
}

export default API;
