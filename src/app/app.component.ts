import { Component, OnInit} from '@angular/core';
import { FilterListComponent } from './filter-list/filter-list.component';
import { InterService } from './Services/inter.service';

interface DateRange {
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  sectorVals:string;

  title = 'market-color-analytics';
  dates: DateRange[];
  selectedDate:string;

  constructor( private connect:InterService ) {


  this.dates = [
    {name: 'By A Date Range'},
    {name: 'Weekly'},
    {name: 'Monthly'},
    {name: 'Daily'},
    {name: 'Pre Covid vs Post Covid'}
];
   }

   ngOnInit(): void {
	  this.connect.cast.subscribe(sectorVals=> this.sectorVals=sectorVals);
  }

}
