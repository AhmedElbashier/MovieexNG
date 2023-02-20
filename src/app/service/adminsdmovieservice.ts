import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Genre, ProductionCompany, ProductionCountry, SpokenLanguage } from './movies.service';
import { RootObject } from './adminmovieservice';

export interface SdMovie {
  id: string;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AdminSdMoviesService {
  baseUrl: string;
  systemUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:5001/api/v1/';
    this.apiKey = 'e426552619b9260fc3ebcceecccfe30c';
    this.systemUrl = "http://localhost:5001/api/v1/";
    this.language = 'en-US';
    this.region = 'US';
  }

  getNowPlaying(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.baseUrl}Sdmovie/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }

  async addToSystem(movie: any): Promise<any> {
    return this.http.post<any>(this.systemUrl + "SdMovie", movie).toPromise();
  }
  async getAll(): Promise<any> {
    return this.http.get<any>(this.systemUrl + "SdMovie",).toPromise();
  }
  
  async getMovie(id: any): Promise<RootObject> {
    return this.http
      .get<RootObject>(`${this.systemUrl}SdMovie/${id}`)
      .toPromise();
  }
  async checkInSystem(id: any): Promise<any> {
    return this.http
      .get<any>(`${this.systemUrl}SdMovie/${id}`)
      .toPromise();
  }
  async markAvailable(movie: any, id: any): Promise<any> {
    // return this.http.put<any>(this.systemUrl + "movie" + id, movie).toPromise();

    return this.http.put<any>(`${this.systemUrl}SdMovie/${id}`, movie).toPromise();
  }
  async markUnavailable(movie: any, id: any): Promise<any> {
    return this.http.put<any>(`${this.systemUrl}SdMovie/${id}`, movie).toPromise();
  }
}
