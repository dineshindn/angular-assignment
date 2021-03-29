import { Component, OnInit } from '@angular/core';
import { CharacterApiService } from './character-api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private characterSvc: CharacterApiService) { }
  allCharacters: any = [];
  showSpinner = false;
  offset = 0;
  limit = 0;
  loadedCount = 0;
  loadingShow = false;
  error: string | undefined

  ngOnInit() {
    this.getCharacters();
  }
  getCharacters() {
    this.loadingShow = true;
    this.characterSvc.getAllCharacters(this.offset + 0)
      .subscribe(data => {
        if (data !== undefined) {
          data.forEach((element: any) => {
            this.allCharacters.push(element)
            this.loadingShow = false;
          });
        }
      }, err => this.error = err)
  }
  onScroll() {
    this.showSpinner = true;
    this.characterSvc.getAllCharacters(this.offset + this.characterSvc.loadedCount)
      .subscribe(data => {
        if (data !== undefined) {
          data.forEach((element: any) => {
            this.allCharacters.push(element)
            this.showSpinner = false;
          });
        }
      }, err => this.error = err)
  }
  getTotal() {
    return this.characterSvc.charactersTotal;
  }

}
