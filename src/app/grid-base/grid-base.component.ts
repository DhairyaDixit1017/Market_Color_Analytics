import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-base',
  templateUrl: './grid-base.component.html',
  styleUrls: ['./grid-base.component.css']
})
export class GridBaseComponent implements OnInit {

  constructor() { }

  users: User[];

  cols: any[];
  ngOnInit() {
    this.users = [
      { month: 'January', pre: '65',post:'28' },
      { month: 'February', pre: '59',post:'48' },
      { month: 'March', pre: '80',post:'40' },
      { month: 'April', pre: '81',post:'19' },
      { month: 'May', pre: '56',post:'86' },
      { month: 'June', pre: '55',post:'27' },
      { month: 'July', pre: '40',post:'90' },
  ];
    this.cols = [
        { field: 'month', header: 'Month' },
        { field: 'pre', header: 'PRE-COVID' },
        { field: 'post', header: 'POST-COVID' },
    ];
}
}

export interface User {
  month;
  pre;
  post;
}
