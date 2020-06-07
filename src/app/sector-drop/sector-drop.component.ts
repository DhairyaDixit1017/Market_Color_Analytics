import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-sector-drop',
  templateUrl: './sector-drop.component.html',
 styles: [`
        .work{
        position:absolute;
        float:left;
        width:25%;
        margin-left:270px;
        margin-top:10px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        }
         h4{
            margin-top:0px;
            margin-bottom:3px;
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

    constructor(private _datastoreservice: DatastoreService) {
        this.sectors = [
            {label: 'BASIC INDUSTRIES', value: 'Basic Industries'},
            {label: 'CAPITAL GOODS', value: 'Capital Goods'},
            {label: 'CONSUMER NON-DURABLES', value: 'Consumer Non-Durables'},
            {label: 'CONSUMER SERVICES', value: 'Consumer Services'},
            {label: 'ENERGY', value: 'Energy'},
            {label: 'FINANCE', value: 'Finance'},
            {label: 'HEALTH CARE', value: 'Health Care'},
            {label: 'MISCELLANEOUS', value: 'Miscellaneous'},
            {label: 'PUBLIC UTILITIES', value: 'Public Utilities'},
            {label: 'TECHNOLOGY', value: 'Technology'},
            {label: 'TRANSPORTATION', value: 'Transportation'},
            
        ];

    }

  ngOnInit(): void {
  }

  sendSelectedSector(){
    console.log(this.selectedSectors+" this is from sendselected inside sectordrop");
    this._datastoreservice.getSelSec(this.selectedSectors);
}

}
