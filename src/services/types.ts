export type trendingType = {
  time_window: "day" | "week",
  media_type: "all" | "movie" | "tv" | "person"
}

export type searchType = {
  query: string;
  page: Number;
}

export type discoverType = {
  page: number;
  language: string;
  with_genres: Array<number>;
}

export type discoverResponse = {
  page: Number;
  results: Array<searchResult>;
  total_results: number;
  total_pages: number;
}

export type trendingResponse = {
  page: Number;
  results: Array<searchResult>;
  total_results: number;
  total_pages: number;
}

export type languageType = {
  language: string;
}

export type searchResult = {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: string;
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export type movieSearchResult = {
  page: Number;
  results: Array<searchResult>;
  total_results: number;
  total_pages: number;
}

export type genreType = {
  id: number;
  name: string;
}

export type genresListResponse = {
  genres: Array<genreType>
}

export type imageType = {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: Array<string>;
  logo_sizes: Array<string>;
  poster_sizes: Array<string>;
  profile_sizes: Array<string>;
  still_sizes: Array<string>;
}

export type configurationResponse = {
  change_keys: Array<string>;
  images: Array<imageType>;
}

export type movieDetails = {
  language: string;
  movie_id: number;
}

export type productionCompanyType = {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}

export type productionCountryType = {
  iso_3166_1: string;
  name: string;
}

export type spokenLanguageType = {
  iso_639_1: string;
  name: string;
}

export interface movieDetailsResponse {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | Object;
  budget: number;
  genres: Array<genreType>;
  homepage: string | null;
  id: number;
  imdb_id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<productionCompanyType>;
  production_countries: Array<productionCountryType>;
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: Array<spokenLanguageType>;
  status: "Rumored" | "Planned" | "In Production" | "Post Production" | "Released" | "Canceled";
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type videosResponse = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: 360 | 480 | 720 | 1080;
  type: "Trailer" | "Teaser" | "Clip" | "Featurette" | "Behind the Scenes" | "Bloopers"
}

export type movieVideosResponse = {
  id: number;
  results: Array<videosResponse>
}