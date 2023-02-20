export class Socialusers {    
    provider: string;    
    id: string;    
    email: string;    
    name: string;    
    image: string;    
    token?: string;    
    idToken?: string;    
}     
import { Injectable } from '@angular/core';    
import { HttpClient } from '@angular/common/http';    
@Injectable({    
  providedIn: 'root'    
})    
export class SocialloginService {    
url;    
  constructor(private http: HttpClient) { }    
    
  Savesresponse(responce)    
  {    
    this.url =  'http://localhost:64726/Api/Login/Savesresponse';    
    return this.http.post(this.url,responce);    
  }    
}    