import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import {
  Genre,
  ProductionCompany,
  ProductionCountry,
  SpokenLanguage,
} from "./movies.service";

export interface Tv {
  id: string;
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: EposideRunTime[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  in_production: boolean;
  languages: Languages[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air: string;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: Countries[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  available: boolean;
}
export interface EposideRunTime {
  id: string;
}

export interface Languages {
  id: string;
}

export interface Countries {
  id: string;
}

export interface CreatedBy {
  id: string;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export interface LastEpisodeToAir {
  id: string;
  air_date: string;
  rpisode_number: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Network {
  id: string;
  name: string;
  logo_path: string;
  origin_country: string;
}

export interface Season {
  id: string;
  air_date: string;
  episode_count: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

@Injectable({
  providedIn: "root",
})
export class TvService {
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;
  systemUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "https://api.themoviedb.org/3/";
    this.apiKey = "e426552619b9260fc3ebcceecccfe30c";
    this.systemUrl = "http://localhost:5001/api/v1/";
    this.language = "en-US";
    this.region = "US";
  }

  getTvOnTheAir(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/on_the_air?api_key=${this.apiKey}&page=${page}&language=${this.language}`
    );
  }

  getTVAiringToday(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/airing_today?api_key=${this.apiKey}&page=${page}&language=${this.language}`
    );
  }

  getPopularTVShow(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}`
    );
  }

  getTopRatedTVShows(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}`
    );
  }

  getTVShow(id: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/${id}?api_key=${this.apiKey}&language=${this.language}`
    );
  }
  async getSystemTVShow(id: string): Promise<any> {
    return this.http.get<any>(this.systemUrl + "Tv/" + id + "").toPromise();
  }

  getTvVideos(id: any) {
    return this.http.get(
      `${this.baseUrl}tv/${id}/videos?api_key=${this.apiKey}&language=${this.language}`
    );
  }

  getTvBackdropsImages(id: string) {
    return this.http.get(
      `${this.baseUrl}tv/${id}/images?api_key=${this.apiKey}`
    );
  }

  getMovieCredits(id: string) {
    return this.http.get(
      `${this.baseUrl}tv/${id}/credits?api_key=${this.apiKey}&language=${this.language}`
    );
  }

  getGenres(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}genre/tv/list?api_key=${this.apiKey}&language=${this.language}`
    );
  }

  getTVShowByGenre(id: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false`
    );
  }

  getRecomendTv(id: string) {
    return this.http.get(
      `${this.baseUrl}tv/${id}/recommendations?api_key=${this.apiKey}&language=${this.language}`
    );
  }

  searchtv(searchStr: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}search/tv?api_key=${this.apiKey}&query=${searchStr}`
    );
  }
  searchall(searchStr: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}search/multi?api_key=${this.apiKey}&query=${searchStr}`
    );
  }
}
