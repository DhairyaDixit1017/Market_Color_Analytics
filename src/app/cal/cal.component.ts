import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {
  date3: Date;
  dates: Date[];
  rangeDates: Date[];

  constructor() { }

  ngOnInit(): void {

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
 
}
