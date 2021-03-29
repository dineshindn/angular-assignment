import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BASE_URL, SERIES_BASE_URL, PUBLIC_KEY, HASH } from '../helper/hepler';

@Injectable({
  providedIn: 'root'
})

export class SeriesApiService {
  seriesTotal = '';
  constructor(private http: HttpClient) { }

  getAllSeries(offset: number, limit: number): Observable<any> {
    const URL = `${BASE_URL}/${SERIES_BASE_URL}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=${limit}&offset=${offset}`;
    return this.http.get<any>(URL)
      .pipe(map((data: any) => {
        this.seriesTotal = data.data.total
        return data.data.results
      }))
  }

  getViewData(id: any): Observable<any> {
    const URL_DATA = `${BASE_URL}/${SERIES_BASE_URL}/${id}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;
    return this.http.get<any>(URL_DATA)
      .pipe(map((data: any) => data.data.results))
  }

}
