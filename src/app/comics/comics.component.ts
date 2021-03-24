import { Component, OnInit } from '@angular/core';
import { ComicsApiService } from './comics-api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private comicsSvc: ComicsApiService) { }
  allComics: Observable<any> | undefined;


  ngOnInit(){
    this.getComics();
  }

  getComics(){
    this.allComics = this.comicsSvc.getAllComics();
  }
  getComicsAll(){
    this.allComics = this.comicsSvc.getComicsAll();
  }

  onClick() {
  this.getComicsAll()
  }
 
}
