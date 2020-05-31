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
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'PRE-COVID',
                    backgroundColor: 'yellow',
                    borderColor: 'yellow',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'POST-COVID',
                    backgroundColor: 'red',
                    borderColor: 'red',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
    }


  ngOnInit(): void {
  }

}
