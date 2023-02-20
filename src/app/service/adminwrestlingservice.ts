import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminWrestlingService {
  baseUrl: string;a
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:5001/api/v1/';
    this.apiKey = 'e426552619b9260fc3ebcceecccfe30c';
    this.language = 'en-US';
    this.region = 'US';
  }

  getNowPlaying(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.baseUrl}Wrestling/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }

  searchWrestlings(searchStr: string): Observable<any> {
    return this.http.get(`${this.baseUrl}search/Wrestling?api_key=${this.apiKey}&query=${searchStr}`);
  }

  getPopular(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.baseUrl}Wrestling/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }

  getUpComingWrestlings(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.baseUrl}Wrestling/upcoming?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }

  getTopRatedWrestlings(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.baseUrl}Wrestling`);
  }

  getDiscoverWrestlings(): Observable<any> {
    return this.http.get(`${this.baseUrl}discover/Wrestling?api_key=${this.apiKey}`);
  }

  getGenres(): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/Wrestling/list?api_key=${this.apiKey}&language=${this.language}`);
  }

  getWrestlingsByGenre(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/${id}/Wrestlings?api_key=${this.apiKey}`);
  }

  getWrestling(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}Wrestling/${id}?api_key=${this.apiKey}`);
  }

  getWrestlingReviews(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}Wrestling/${id}/reviews?api_key=${this.apiKey}`);
  }

  getWrestlingCredits(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}Wrestling/${id}/credits?api_key=${this.apiKey}`);
  }

  getBackdropsImages(id: string) {
    return this.http.get(`${this.baseUrl}Wrestling/${id}/images?api_key=${this.apiKey}`);
  }

  getWrestlingVideos(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}Wrestling/${id}/videos?api_key=${this.apiKey}`);
  }

  getRecomendWrestlings(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}Wrestling/${id}/recommendations?api_key=${this.apiKey}`);
  }

  getPersonDetail(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}person/${id}?api_key=${this.apiKey}`);
  }

  getPersonExternalData(id: string) {
    return this.http.get(`${this.baseUrl}person/${id}/external_ids?api_key=${this.apiKey}`);
  }

  getPersonCast(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}person/${id}/Wrestling_credits?api_key=${this.apiKey}`);
  }

}
