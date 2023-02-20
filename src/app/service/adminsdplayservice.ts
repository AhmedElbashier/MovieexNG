import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { RootObject } from './adminmovieservice';

@Injectable({
  providedIn: 'root'
})
export class AdminSdPlaysService {
  baseUrl: string;a
  apiKey: string;
  language: string;
  region: string;
  systemUrl:string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:5001/api/v1/';
    this.apiKey = 'e426552619b9260fc3ebcceecccfe30c';
    this.language = 'en-US';
    this.systemUrl = 'http://localhost:5001/api/v1/';
    this.region = 'US';
  }

  async getAll(): Promise<any> {
    return this.http.get<any>(this.systemUrl + "SdPlay",).toPromise();
  }
  
  async getPlay(id: any): Promise<RootObject> {
    return this.http
      .get<RootObject>(`${this.systemUrl}SdPlay/${id}`)
      .toPromise();
  }
  async checkInSystem(id: any): Promise<any> {
    return this.http
      .get<any>(`${this.systemUrl}SdPlay/${id}`)
      .toPromise();
  }
  async markAvailable(play: any, id: any): Promise<any> {
    // return this.http.put<any>(this.systemUrl + "movie" + id, movie).toPromise();

    return this.http.put<any>(`${this.systemUrl}SdPlay/${id}`, play).toPromise();
  }
  async markUnavailable(play: any, id: any): Promise<any> {
    return this.http.put<any>(`${this.systemUrl}SdPlay/${id}`, play).toPromise();
  }
  async addToSystem(play: any): Promise<any> {
    return this.http.post<any>(this.systemUrl + "SdPlay", play).toPromise();
  }
}
