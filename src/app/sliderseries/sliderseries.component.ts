import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { SliderseriesApiService } from './sliderseries-api.service';
@Component({
  selector: 'app-sliderseries',
  templateUrl: './sliderseries.component.html',
  styleUrls: ['./sliderseries.component.css']
})
export class SliderseriesComponent implements OnInit {


  constructor(private comicsSvc: SliderseriesApiService) { }
  allSeriesSlider: Observable<any> | undefined;


  ngOnInit() {
    this.getSeriesSlider();
  }

  getSeriesSlider() {
    this.allSeriesSlider = this.comicsSvc.getAllSeriesSlider();
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

}
