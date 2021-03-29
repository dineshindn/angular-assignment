import { Component, OnInit, ViewChild } from '@angular/core';
import { SeriesApiService } from './series-api.service';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  allSeries: any = [];
  constructor(private seriesSvc: SeriesApiService) { }
  showSpinner = false;
  offset = 0;
  limit = 0;
  loadingShow = false;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngOnInit() {

    this.getSeries();

  }

  getSeries() {
    this.loadingShow = true;
    this.seriesSvc.getAllSeries(this.offset + this.limit, this.limit + 40).subscribe(data => {
      if (data !== undefined) {
        data.forEach((element: any) => {
          this.allSeries.push(element)
          this.allSeries.paginator = this.paginator;
          this.loadingShow = false;
        });
      }
    })
  }

  getTotal() {
    return this.seriesSvc.seriesTotal;
  }

}
