import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from './shared/characters-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(private characterSvc: CharactersApiService) { }
  allCharacters: Observable<any> | undefined;

  
  ngOnInit(){
    this.getCharacters();
  }
   getCharacters(){
     this.allCharacters = this.characterSvc.getAllCharacters();
   }
}
