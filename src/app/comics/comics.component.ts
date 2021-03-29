import { Component, OnInit } from '@angular/core';
import { ComicsApiService } from './comics-api.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  allComics: any = [];
  constructor(private comicsSvc: ComicsApiService) { }
  showSpinner = false;
  loadingShow = false;
  offset = 0;
  limit = 0;
  loadedCount = 0;
  ngOnInit() {
    this.loadingShow = true;
    this.getComics();
  }
  getComics() {
    this.comicsSvc.getAllComics(this.offset + 0).subscribe(data => {
      if (data !== undefined) {
        data.forEach((element: any) => {
          this.allComics.push(element)
        });
        this.showSpinner = false;
        this.loadingShow = false;
      }
    })
  }
  onClick() {
    this.getComicsAll()
  }
  getComicsAll() {
    this.showSpinner = true;
    this.comicsSvc.getAllComics(this.offset + this.comicsSvc.loadedCount).subscribe(data => {
      if (data !== undefined) {
        data.forEach((element: any) => {
          this.allComics.push(element)
        });
        this.showSpinner = false;
      }
    })
  }

  getTotal() {
    return this.comicsSvc.comicsTotal;
  }
}