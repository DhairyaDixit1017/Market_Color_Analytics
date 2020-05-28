import { Component, OnInit } from '@angular/core';


interface DateRange {
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'market-color-analytics';
  dates: DateRange[];
  selectedDate:string;

  constructor() {


  this.dates = [
    {name: 'By A Date Range'},
    {name: 'Weekly'},
    {name: 'Monthly'},
    {name: 'Daily'},
    {name: 'Pre Covid vs Post Covid'}
];

   }

   ngOnInit(){

   }

}
