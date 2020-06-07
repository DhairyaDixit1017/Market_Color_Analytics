import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {
  date3: Date;
  dates: Date[];
  rangeDates: Date[];

  constructor(private _datastoreservice: DatastoreService) { }

  ngOnInit(): void {

        let today = new Date();
        console.log(today.toISOString().split('T')[0]);
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
    this._datastoreservice.getDates(range);
}
 
}
