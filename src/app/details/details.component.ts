import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterApiService } from '../characters/character-api.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  characterDetails: Observable<any> | undefined;

  constructor(private characterSvc: CharacterApiService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.getDatas();
  }

  getDatas() {
    console.log(this.router.snapshot.params.name)
    this.characterDetails = this.characterSvc.getViewData(this.router.snapshot.params.id);
  }


}
