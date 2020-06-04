import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {

  data: any;
  
    constructor() {
        this.data = {
            labels: ['ABBOTT LABORATORIES', 'ABBVIE INC', 'ACCENTURE PLC'],
            datasets: [
                {
                    label: 'PRE-COVID',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [65, 59, 46]
                },
                {
                    label: 'POST-COVID',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [28, 48, 19]
                }
            ]
        }
    }              


  ngOnInit(): void {
  }

}
