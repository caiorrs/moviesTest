export type trendingType = {
  time_window: "day" | "week",
  media_type: "all" | "movie" | "tv" | "person"
}

export type searchType = {
  query: string;
  page: Number;
}

export type discoveryType = {
  page: number;
  language: string;
  region: string;
}

export type discoveryResponse = {
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

export type genreResult = {
  id: number;
  name: string;
}

export type genresListResponse = {
  genres: Array<genreResult>
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