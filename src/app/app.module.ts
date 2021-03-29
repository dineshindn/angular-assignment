import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ComicsComponent } from './comics/comics.component';
import { CharactersComponent } from './characters/characters.component';
import { SeriesComponent } from './series/series.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { SliderComponent } from './slider/slider.component';
import { SlidercomicsComponent } from './slidercomics/slidercomics.component';
import { SliderseriesComponent } from './sliderseries/sliderseries.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoaderComponent } from './loader/loader.component';
import { DetailsComponent } from './details/details.component';
import { DetailscomicsComponent } from './detailscomics/detailscomics.component';
import { DetailsseriesComponent } from './detailsseries/detailsseries.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ComicsComponent,
    CharactersComponent,
    SeriesComponent,
    SliderComponent,
    SlidercomicsComponent,
    SliderseriesComponent,
    LoaderComponent,
    DetailsComponent,
    DetailscomicsComponent,
    DetailsseriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CarouselModule,
    NgxChartsModule,
    ChartModule,
    NgxPaginationModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }