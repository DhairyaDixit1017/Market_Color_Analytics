import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';
import { ChangeEventArgs } from '@syncfusion/ej2-inputs';
import {Observable} from 'rxjs';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-grids';
import {DatastoreService} from '../datastore.service';
import {CompanyDropComponent} from '../company-drop/company-drop.component';


@Component({
  selector: 'app-grid-base',
//  templateUrl: './grid-base.component.html',
template:`
 <ejs-grid [dataSource]="data | async" [allowPaging]="false" [pageSettings]= "pageSettings">
    <e-columns>
        <e-column field="date" headerText="Date" ></e-column>
        <e-column class="head" field="companyName" headerText='Company' style="font-style:bold"></e-column>
        <e-column field="sector" headerText="Sector"></e-column>
        <e-column field="ticker" headerText="Ticker"></e-column>
        <e-column field="price" headerText="Stock Price"></e-column>
        <e-column field="volume" headerText="Volume"></e-column>
    </e-columns>
  </ejs-grid>
 `,
  styleUrls: ['./grid-base.component.css']
})
export class GridBaseComponent implements OnInit {

  public data: Observable<DataStateChangeEventArgs>;

  public sel = [];

  public tck = "";

  public pageSettings: PageSettingsModel = { pageSize: 5 };

  private companydrop: CompanyDropComponent;

  constructor(private dataService: DatastoreService){
    this.data = dataService;
}
  
  ngOnInit() {
  }

}
