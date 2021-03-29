import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { BASE_URL, CHARCTERS_BASE_URL, PUBLIC_KEY, HASH } from '../helper/hepler';

@Injectable({
  providedIn: 'root'
})
export class CharacterApiService {

  constructor(private http: HttpClient) { }
  charactersTotal = '';
  loadedCount = 0;
  getAllCharacters(offset: number): Observable<any> {
    const URL = `${BASE_URL}/${CHARCTERS_BASE_URL}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=40&orderBy=-modified&offset=${offset}`;
    return this.http.get<any>(URL)
      .pipe(map((data: any) => {
        retry(2),
          catchError(this.handleError)
        this.charactersTotal = data.data.total
        this.loadedCount = this.loadedCount + data.data.count
        // console.log(this.loadedCount);
        return data.data.results
      }))
  }
  handleError(error: HttpErrorResponse) {
    return throwError('Something bad happend; please try again latter.');
  }

  getViewData(id: any): Observable<any> {
    const URL_DATA = `${BASE_URL}/${CHARCTERS_BASE_URL}/${id}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;
    return this.http.get<any>(URL_DATA)
      .pipe(map((data: any) => data.data.results))
  }


}
