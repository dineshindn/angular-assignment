import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ComicsApiService } from '../comics/comics-api.service';

@Component({
  selector: 'app-detailscomics',
  templateUrl: './detailscomics.component.html',
  styleUrls: ['./detailscomics.component.css']
})
export class DetailscomicsComponent implements OnInit {

  comicsDetails: Observable<any> | undefined;

  constructor(private comicsSvc: ComicsApiService, private router: ActivatedRoute) { }


  ngOnInit() {
    this.getDatas();
  }

  getDatas() {
    console.log(this.router.snapshot.params.id)
    this.comicsDetails = this.comicsSvc.getViewData(this.router.snapshot.params.id);
  }


}
