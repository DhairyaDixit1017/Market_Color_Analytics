import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import {Observable} from 'rxjs';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-grids';
import {DatastoreService} from '../datastore.service';
import {CompanyDropComponent} from '../company-drop/company-drop.component';



@Component({
  selector: 'app-grid-base',
  templateUrl: './grid-base.component.html',
  styleUrls: ['./grid-base.component.css']
})
export class GridBaseComponent implements OnInit {

  
  public data: Observable<DataStateChangeEventArgs>;

  public pageSettings: PageSettingsModel = {pageSize: 5};

  private companydrop: CompanyDropComponent;

  constructor(private dataService: DatastoreService){
    this.data = dataService;
}

ngOnInit() {
}

}

