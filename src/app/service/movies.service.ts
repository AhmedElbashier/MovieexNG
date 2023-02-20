import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export interface Movie {
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

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  id: string;
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  id: string;
  english_name: string;
  iso_639_1: string;
  name: string;
}

@Injectable({
  providedIn: "root",
})
export class MoviesService {
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

  getNowPlaying(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(
      `${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  searchMovies(searchStr: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}`
    );
  }

  getPopular(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(
      `${this.baseUrl}movie/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  getUpComingMovies(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(
      `${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  getTopRatedMovies(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(
      `${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  getDiscoverMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}discover/movie?api_key=${this.apiKey}`
    );
  }

  getGenres(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=${this.language}`
    );
  }

  getMoviesByGenre(id: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}genre/${id}/movies?api_key=${this.apiKey}`
    );
  }

  getMovie(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
  }
  async getSystemMovie(id: string): Promise<any> {
    return this.http.get<any>(this.systemUrl + "Movie/" + id).toPromise();
  }

  getMovieReviews(id: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/${id}/reviews?api_key=${this.apiKey}`
    );
  }

  getMovieCredits(id: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`
    );
  }

  getBackdropsImages(id: string) {
    return this.http.get(
      `${this.baseUrl}movie/${id}/images?api_key=${this.apiKey}`
    );
  }

  getMovieVideos(id: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/${id}/videos?api_key=${this.apiKey}`
    );
  }

  getRecomendMovies(id: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/${id}/recommendations?api_key=${this.apiKey}`
    );
  }

  getPersonDetail(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}person/${id}?api_key=${this.apiKey}`);
  }

  getPersonExternalData(id: string) {
    return this.http.get(
      `${this.baseUrl}person/${id}/external_ids?api_key=${this.apiKey}`
    );
  }

  getPersonCast(id: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}person/${id}/movie_credits?api_key=${this.apiKey}`
    );
  }
}
