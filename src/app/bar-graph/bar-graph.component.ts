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
                    data: [65, 59, 46],
                    fill: false,
                    borderColor: '#7CB342',
                    backgroundColor: '#9CCC65',
                    
                    
                },
                {
                    label: 'POST-COVID',
                    data: [28, 48, 19],
                    fill: false,
                    borderColor: '#1E88E5',
                    backgroundColor: '#42A5F5',
                    
                    
                }
            ]
        }
    }              


  ngOnInit(): void {
  }

}
