import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-sector-drop',
  templateUrl: './sector-drop.component.html',
 styles: [`
        
         h4{
            margin-top:0px;
         }
         p{
            font-size:14px;
        }

        :host ::ng-deep .ui-multiselect {
            min-width: 15em;
        }
        :host ::ng-deep .ui-multiselected-item-token,
        :host ::ng-deep .ui-multiselected-empty-token {
            padding: 2px 4px;
            margin: 0 0.286em 0 0;
            display: inline-block;
            vertical-align:middle;
            height: 1.857em;
        }
        :host ::ng-deep .ui-multiselected-item-token {
            background: #007ad9;
            color: #ffffff;
        }
        :host ::ng-deep .ui-multiselected-empty-token {
            background: #d95f00;
            color: #ffffff;
        }
    `]
})

export class SectorDropComponent implements OnInit {

  

    constructor() {
       
    }

  ngOnInit(): void {
  }

}
