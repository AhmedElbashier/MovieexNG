import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface LastEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface NextEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path?: any;
  vote_average: number;
  vote_count: number;
}

export interface Network {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface RootObject {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air: NextEpisodeToAir;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
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
  available:string;
}



@Injectable({
  providedIn: 'root'
})
export class AdminTvsService {
  baseUrl: string;a
  apiKey: string;
  language: string;
  region: string;
  systemUrl:String;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.systemUrl = 'http://localhost:5001/api/v1/';
    this.apiKey = 'e426552619b9260fc3ebcceecccfe30c';
    this.language = 'en-US';
    this.region = 'US';
  }

  getNowPlaying(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.baseUrl}tv/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }

  searchTvs(searchStr: string): Observable<any> {
    return this.http.get(`${this.baseUrl}search/tv?api_key=${this.apiKey}&query=${searchStr}`);
  }

  getPopular(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.baseUrl}tv/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }

  getUpComingTvs(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.baseUrl}tv/upcoming?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }

  getTopRatedTvs(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.baseUrl}tv`);
  }
 getAllTvs(): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.systemUrl}Tv`);
  }
  getDiscoverTvs(): Observable<any> {
    return this.http.get(`${this.baseUrl}discover/tv?api_key=${this.apiKey}`);
  }

  getGenres(): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/tv/list?api_key=${this.apiKey}&language=${this.language}`);
  }

  getTvsByGenre(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/${id}/tvs?api_key=${this.apiKey}`);
  }

  getTv(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/${id}?api_key=${this.apiKey}`);
  }

  getTvReviews(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/${id}/reviews?api_key=${this.apiKey}`);
  }

  getTvCredits(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/${id}/credits?api_key=${this.apiKey}`);
  }

  getBackdropsImages(id: string) {
    return this.http.get(`${this.baseUrl}tv/${id}/images?api_key=${this.apiKey}`);
  }

  getTvVideos(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/${id}/videos?api_key=${this.apiKey}`);
  }

  getRecomendTvs(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/${id}/recommendations?api_key=${this.apiKey}`);
  }

  getPersonDetail(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}person/${id}?api_key=${this.apiKey}`);
  }

  getPersonExternalData(id: string) {
    return this.http.get(`${this.baseUrl}person/${id}/external_ids?api_key=${this.apiKey}`);
  }

  getPersonCast(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}person/${id}/tv_credits?api_key=${this.apiKey}`);
  }
  async addToSystem(Tv: any): Promise<any> {
    return this.http.post<any>(this.systemUrl+"Tv", Tv).toPromise();
  }
  async checkInSystem(id: any): Promise<RootObject> {
    return this.http.get<RootObject>(`${this.systemUrl}Tv/${id}`).toPromise();
  }
  async markAvailable(tv:any,id: any): Promise<any> {
    // return this.http.put<any>(this.systemUrl + "Tv" + id, movie).toPromise();

    return this.http.put<any>(`${this.systemUrl}Tv/${id}`,tv).toPromise();

  }
  async markUnavailable(tv:any,id: any): Promise<any> {
    return this.http.put<any>(`${this.systemUrl}Tv/${id}`,tv).toPromise();
  }
}
