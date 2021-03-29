import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { SliderApiService } from './slider-api.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {


  constructor(private comicsSvc: SliderApiService) { }
  allSlider: Observable<any> | undefined;


  ngOnInit() {
    this.getSlider();
  }

  getSlider() {
    this.allSlider = this.comicsSvc.getAllSlider();
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
