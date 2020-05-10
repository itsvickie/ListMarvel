import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL_API = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey';
  API_KEY = '963b33fc0b7f65f31cdc1ea03c3751b5';
  HASH_KEY = 'a3892121c7438cab232ea2fea056525c';

  constructor(private httpClient: HttpClient) { }
  
  getMarvel(){
    return this.httpClient.get(`${this.URL_API}=${this.API_KEY}&hash=${this.HASH_KEY}`);
  }
}
