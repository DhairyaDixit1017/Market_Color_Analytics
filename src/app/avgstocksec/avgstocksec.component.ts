import { Component, OnInit } from '@angular/core';
import {DataservService} from '../dataserv.service';
import {IData} from '../data';

@Component({
  selector: 'app-avgstocksec',
  templateUrl: './avgstocksec.component.html',
  styleUrls: ['./avgstocksec.component.css']
})
export class AvgstocksecComponent implements OnInit {

  public data = [];
  public d = [];
  public name = "";
  public val = "";
  public v = "";
  public sectors = [];

  constructor(private _dataService: DataservService) { 

    this.sectors = ["Basic Industries","Capital Goods","Consumer Non-Durables","Consumer Services","Energy","Finance",
    "Health Care","Miscellaneous","Public Utilities","Technology","Transportation"];

  }

  ngOnInit(): void {
  }

  sendVal(val){
    this.name = val;
    this.callGetData();
    console.log("Sending the value of selected tckr to getVal")
  }

  getval(): string{
    return this.name;
  }

  callGetData(){
    console.log("Now in callGetData");
    this.v = this.getval()
    this._dataService.getDataStockSec(this.v)
      .subscribe(data => 
        {this.data = data;
        console.log(data);
        });
  }

  dis(value) {

    var myDemo = document.getElementById('demostocksec');
    for(let i in this.sectors){
        if(value==this.sectors[i]){
          console.log(value);
          myDemo.style.display="block";
          this.val=value;
          break;
        }
        else console.log("No Matches");
        }
    }

}
