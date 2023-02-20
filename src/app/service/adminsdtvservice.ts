import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { RootObject } from './adminmovieservice';

@Injectable({
  providedIn: 'root'
})
export class AdminSdTvsService {
  baseUrl: string;a
  apiKey: string;
  language: string;
  region: string;
  systemUrl:string;
  rootObject:any

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:5001/api/v1/';
    this.apiKey = 'e426552619b9260fc3ebcceecccfe30c';
    this.language = 'en-US';
    this.region = 'US';
    this.systemUrl = 'http://localhost:5001/api/v1/';
  }

  async getAll(): Promise<any> {
    return this.http.get<any>(this.systemUrl + "SdTv",).toPromise();
  }
  
  async getTv(id: any): Promise<RootObject> {
    return this.http
      .get<RootObject>(`${this.systemUrl}SdTv/${id}`)
      .toPromise();
  }
  async checkInSystem(id: any): Promise<any> {
    return this.http
      .get<any>(`${this.systemUrl}SdTv/${id}`)
      .toPromise();
  }
  async markAvailable(tv: any, id: any): Promise<any> {
    // return this.http.put<any>(this.systemUrl + "movie" + id, movie).toPromise();

    return this.http.put<any>(`${this.systemUrl}SdTv/${id}`, tv).toPromise();
  }
  async markUnavailable(tv: any, id: any): Promise<any> {
    return this.http.put<any>(`${this.systemUrl}SdTv/${id}`, tv).toPromise();
  }
  async addToSystem(tv: any): Promise<any> {
    return this.http.post<any>(this.systemUrl + "SdTv", tv).toPromise();
  }
}
