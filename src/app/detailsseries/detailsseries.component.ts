import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SeriesApiService } from '../series/series-api.service';

@Component({
  selector: 'app-detailsseries',
  templateUrl: './detailsseries.component.html',
  styleUrls: ['./detailsseries.component.css']
})
export class DetailsseriesComponent implements OnInit {

  seriesDetails: Observable<any> | undefined;

  constructor(private seriesSvc: SeriesApiService, private router: ActivatedRoute) { }

  loading = true;

  ngOnInit() {
    this.getDatas();
  }

  getDatas() {
    console.log(this.router.snapshot.params.id)
    this.seriesDetails = this.seriesSvc.getViewData(this.router.snapshot.params.id);
  }
}
