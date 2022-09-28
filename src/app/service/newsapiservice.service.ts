import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiserviceService {
  constructor(private http: HttpClient) {}

  url_Id =
    'https://newsapi.org/v2/top-headlines?country=us&apikey=1c5e2237fcd342bf86e1cc62c9d23654';

  tech_url =
    'https://newsapi.org/v2/top-headlines?country=in&category=technology&apikey=1c5e2237fcd342bf86e1cc62c9d23654';

  business_url =
    'https://newsapi.org/v2/top-headlines?country=in&category=business&apikey=1c5e2237fcd342bf86e1cc62c9d23654';
  getNews(): Observable<any> {
    return this.http.get(this.url_Id);
  }
  techNews(): Observable<any> {
    return this.http.get(this.tech_url);
  }
  businessNews(): Observable<any> {
    return this.http.get(this.business_url);
  }
}
