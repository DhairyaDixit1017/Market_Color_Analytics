import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-sector-drop',
  templateUrl: './sector-drop.component.html',
 styles: [`
        .work{
        position:absolute;
        float:left;
        width:25%;
        margin-left:450px;
        margin-top:0px;
        }
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

  sectors: SelectItem[];
  selectedSectors: string[] = [];

    constructor() {
        this.sectors = [
            {label: 'BASIC INDUSTRIES', value: 'BASIC INDUSTRIES'},
            {label: 'CAPITAL GOODS', value: 'CAPITAL GOODS'},
            {label: 'CONSUMER NON-DURABLES', value: 'CONSUMER NON-DURABLES'},
            {label: 'CONSUMER SERVICES', value: 'CONSUMER SERVICES'},
            {label: 'ENERGY', value: 'ENERGY'},
            {label: 'FINANCE', value: 'FINANCE'},
            {label: 'HEALTH CARE', value: 'HEALTH CARE'},
            {label: 'MISCELLANEOUS', value: 'MISCELLANEOUS'},
            {label: 'PUBLIC UTILITIES', value: 'PUBLIC UTILITIES'},
            {label: 'RETAIL', value: 'RETAIL'},
            {label: 'TECHNOLOGY', value: 'TECHNOLOGY'},
            {label: 'TRANSPORTATION', value: 'TRANSPORTATION'},
            
        ];

    }

  ngOnInit(): void {
  }

}
