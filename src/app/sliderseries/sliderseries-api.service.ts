import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BASE_URL, SERIES_BASE_URL, PUBLIC_KEY, HASH } from '../helper/hepler';

@Injectable({
  providedIn: 'root'
})
export class SliderseriesApiService {

  URL_API = `${BASE_URL}/${SERIES_BASE_URL}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=40&orderBy=-modified&offset=0`;
  constructor(private http: HttpClient) { }
  getAllSeriesSlider(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }

}
