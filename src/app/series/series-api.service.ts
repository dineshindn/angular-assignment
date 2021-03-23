import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesApiService {

  PUBLIC_KEY = 'd7a816e34d32870a8fea3875bad1758c';
  HASH = '7161ac2c47a631b0d1c574d96cda8a64';
  URL_API = `https:gateway.marvel.com/v1/public/series?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&limit=40&orderBy=-modified&offset=0`;
  constructor(private http: HttpClient) { }
  getAllSeries(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }
}
