import { Component, OnInit } from '@angular/core';
import {DataservService} from '../dataserv.service';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {
  date3: Date;
  dates: Date[];
  rangeDates: Date[];
  picks:any;
  datesmodef: DateRange[];
  selectedDate:DateRange;
  startDate:string;
  endDate:string;
  grouping:string;

  constructor(private _dataService: DataservService) {

    this.datesmodef = [
    {name: 'Pre Covid vs Post Covid'},
    {name: 'Weekly'},
    {name: 'Monthly'},
    {name: 'Daily'},
  
];
   }

  ngOnInit(): void {

    this._dataService.cast2.subscribe(startDate=> this.startDate=startDate);
    this._dataService.cast3.subscribe(endDate=> this.endDate=endDate);
    this._dataService.cast4.subscribe(grouping=> this.grouping=grouping);

        let today = new Date();
        let firstDate = new Date('01/01/2020');
        this.rangeDates = [ firstDate, today];
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;

  }
  sendDates(){
    let start = this.rangeDates[0];
    var startString = new Date(start.getTime() - (start.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
    let end = this.rangeDates[1];
    var endString = new Date(end.getTime() - (end.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
    let range = [startString, endString];
    this.picks=range;
    this._dataService.editInterim2(this.picks[0]);
    this._dataService.editInterim3(this.picks[1]);
    this._dataService.editInterim4(this.selectedDate.name);
    // this._datastoreservice.getDates(range);
}
}
interface DateRange {
  name: string;
}
