import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {

  data: any;
  cho=false;
  constructor() { 
    if(this.cho==true)
    {
    this.data = {
            labels: ['PRE-COVID', 'POST-COVID'],
            datasets: [
                {
                    label: 'ABBOTT LABORATORIES',
                    backgroundColor: '#42A5F5',
                    borderColor: '#9CCC65',
                    data: [65, 28],
                    fill: false
                },
                {
                    label: 'ABBVIE INC',
                    backgroundColor: '#9CCC65',
                    borderColor: '#42A5F5',
                    data: [59, 48],
                    fill: false,
                    
                    
                },
                {
                    label: 'ACCENTURE PLC',
                    data: [46, 19],
                    fill: false,
                    borderColor: 'orange',
                    backgroundColor: '#42A5F5',
                }
            ]
        }
    }
    else{
       this.data = {
            labels: ['PRE-COVID', 'POST-COVID'],
            datasets: [
                {
                    label: 'DHAIRYA',
                    backgroundColor: '#42A5F5',
                    borderColor: '#9CCC65',
                    data: [65, 28],
                    fill: false
                },
                {
                    label: 'MEET',
                    backgroundColor: '#9CCC65',
                    borderColor: '#42A5F5',
                    data: [59, 48],
                    fill: false,
                    
                    
                },
                {
                    label: 'KETAN',
                    data: [46, 19],
                    fill: false,
                    borderColor: 'orange',
                    backgroundColor: '#42A5F5',
                }
            ]
        }
    }

  }

  ngOnInit(): void {
  }

}
