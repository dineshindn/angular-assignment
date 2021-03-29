import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { SlidercomicsApiService } from './slidercomics-api.service';
@Component({
  selector: 'app-slidercomics',
  templateUrl: './slidercomics.component.html',
  styleUrls: ['./slidercomics.component.css']
})
export class SlidercomicsComponent implements OnInit {


  constructor(private comicsSvc: SlidercomicsApiService) { }
  allComicsSlider: Observable<any> | undefined;


  ngOnInit() {
    this.getComicsSlider();
  }

  getComicsSlider() {
    this.allComicsSlider = this.comicsSvc.getAllComicsSlider();
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
