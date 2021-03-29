import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { comicsChart, pieChart, areaChart } from '../charts/charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // chart components area, pie and bar charts

  comicsChart: any[] | undefined
  pieChart: any[] | undefined
  areaChart: any[] | undefined
  view: any[] = [150, 170];

  // options
  legendTitle: string = 'Comics Publised 27612';
  legendTitleMulti: string = 'Months';
  legendPosition: string = 'below'; // ['right', 'below']
  legend: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  yAxisLabel: string = '';
  xAxisLabel: string = 'Series Relesed';
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  maxXAxisTickLength: number = 30;
  maxYAxisTickLength: number = 30;
  trimXAxisTicks: boolean = false;
  trimYAxisTicks: boolean = false;
  rotateXAxisTicks: boolean = false;
  // xAxisTicks: any[] = [' 1', '2', ' 3', '4', '5', ' 6', ' 7']
  yAxisTicks: any[] = [50, 100, 150, 200, 250, 300, 350]
  animations: boolean = true; // animations on load
  showGridLines: boolean = false; // grid lines
  showDataLabel: boolean = false; // numbers on bars
  gradient: boolean = false;
  colorScheme = {
    domain: ['#3f8ca9', '#79b39c', '#c7ba76', '#5B6FC8', '#25706F']
  };
  schemeType: string = 'ordinal'; // 'ordinal' or 'linear'
  barPadding: number = 10
  tooltipDisabled: boolean = false;
  yScaleMax: number = 1000;
  roundEdges: boolean = false;
  constructor() { Object.assign(this, { comicsChart, pieChart, areaChart }) }
  ngOnInit(): void {
  }
  onSelect(event: any) {
    console.log(event);
  }
  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }
  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  formatString(input: string): string {
    return input.toUpperCase()
  }
  formatNumber(input: number): number {
    return input
  }

  // banner slider carousal

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
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }


}
