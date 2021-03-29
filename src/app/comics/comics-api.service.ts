import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BASE_URL, COMICS_BASE_URL, PUBLIC_KEY, HASH } from '../helper/hepler';

@Injectable({
  providedIn: 'root'
})

export class ComicsApiService {
  comicsTotal = '';
  loadedCount = 0;
  constructor(private http: HttpClient) { }
  getAllComics(offset: number): Observable<any> {
    const URL = `${BASE_URL}/${COMICS_BASE_URL}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=40&offset=${offset}`;
    return this.http.get<any>(URL)
      .pipe(map((data: any) => {
        this.comicsTotal = data.data.total
        this.loadedCount = this.loadedCount + data.data.count
        return data.data.results
      }))
  }

  getViewData(id: any): Observable<any> {
    const URL_DATA = `${BASE_URL}/${COMICS_BASE_URL}/${id}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;
    return this.http.get<any>(URL_DATA)
      .pipe(map((data: any) => data.data.results))
  }
}
