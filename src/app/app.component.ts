import { Component, OnInit} from '@angular/core';
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
  listVals:string;
  title = 'market-color-analytics';
  // datesmodef: DateRange[];
  // selectedDate:string;

  constructor( private connect:InterService ) {

//   this.datesmodef = [
//     {name: 'Pre Covid vs Post Covid'},
//     {name: 'Weekly'},
//     {name: 'Monthly'},
//     {name: 'Daily'},
  
// ];

   }
   ngOnInit(): void {
	  this.connect.cast.subscribe(sectorVals=> this.sectorVals=sectorVals);
    this.connect.ultra.subscribe(listVals=> this.listVals=listVals);
  }

}
