import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { DetailsComponent } from './details/details.component';
import { DetailscomicsComponent } from './detailscomics/detailscomics.component';
import { DetailsseriesComponent } from './detailsseries/detailsseries.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { SliderComponent } from './slider/slider.component';
import { SlidercomicsComponent } from './slidercomics/slidercomics.component';
import { SliderseriesComponent } from './sliderseries/sliderseries.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "characters", component: CharactersComponent },
  { path: "series", component: SeriesComponent },
  { path: "comics", component: ComicsComponent },
  { path: "home", component: HomeComponent },
  { path: "slider", component: SliderComponent },
  { path: "sliderseries", component: SliderseriesComponent },
  { path: "slidercomics", component: SlidercomicsComponent },
  { path: "characters/:name/:id", component: DetailsComponent },
  { path: "comics/:name/:id", component: DetailscomicsComponent },
  { path: "series/:name/:id", component: DetailsseriesComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
