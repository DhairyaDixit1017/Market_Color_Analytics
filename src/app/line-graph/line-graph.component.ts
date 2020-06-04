import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {

  data: any;

  constructor() { 

    this.data = {
            labels: ['PRE-COVID', 'POST-COVID'],
            datasets: [
                {
                    label: 'ABBOTT LABORATORIES',
                    data: [65, 28],
                    fill: false,
                    borderColor: '#9CCC65'
                },
                {
                    label: 'ABBVIE INC',
                    data: [59, 48],
                    fill: false,
                    borderColor: '#42A5F5'
                },
                {
                    label: 'ACCENTURE PLC',
                    data: [46, 19],
                    fill: false,
                    borderColor: 'orange'
                }
            ]
        }

  }

  ngOnInit(): void {
  }

}
