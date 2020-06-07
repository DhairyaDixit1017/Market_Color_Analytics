import { Component, OnInit } from '@angular/core';
import {DataservService} from '../dataserv.service';
import {IData} from '../data';

@Component({
  selector: 'app-avgstock',
  templateUrl: './avgstock.component.html',
  styleUrls: ['./avgstock.component.css']
})
export class AvgstockComponent implements OnInit {

  public data = [];
  public d = [];
  public name=[];
  public val="";
  public v=[];
  public tickers = [];
  public nomu =["ABBV","C"];
  data2:any;
  public decider:string;
  public shareCompanies: string[];
  public shareSectors: string[];
  public test:string;

  sendVals(val){
    this.name = this.shareCompanies;
    this.callGetData();
    console.log("Sending the value of selected tckr to getVal")
  }

  getval(): string[]{
    return this.name;
  }


  callGetData(){
    console.log("Now in callGetData");
    this.v = this.getval()
    this._dataService.getDataS(this.v)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.datasets = this.data;
          console.log(data);
        });
      
  }

  diss(value) {

    var myDemo = document.getElementById('demos');
    for(let i in this.tickers){
        if(value==this.tickers[i]){
          console.log(value);          
          break;
        }
        else console.log("No Matches");
        }
    }

  

  constructor(private _dataService: DataservService) { 

    this.tickers = ["ABBV","ABT","ACN","AMT","ANTM","AXP","AZN","BABA","BAC",
    "BCDRF","BDX","BLK","BMY","BNS","BSAC","BSBR","BSMX","BTI","C","CAT","CNI",
    "CRM","CVS","D","DEO","DUK","EL","ENB","EQNR","FIS","GE","GS","GSK","HD","HON",
    "HSBC","JNJ","JPM","LFC","LLY","LMT","MA","MBFJF","MDT","MO","MS","NEE","NKE","NVO",
    "NVS","PBR","PFE","PM","PNC","RIO","RY","SAP","SNP","T","TM","TMO","TSM","UN","UNH",
    "UNP","UPS","UTX","XOM"];

    this.data2 = 
    {
      labels: ['PRE-COVID', 'POST-COVID']
    }

  }

  ngOnInit(): void {
    this._dataService.cast1.subscribe(decider=> this.decider=decider);
    this._dataService.ultra1.subscribe(shareCompanies=> this.shareCompanies=shareCompanies);
    this._dataService.ultra2.subscribe(shareSectors=> this.shareSectors=shareSectors);
  }

}
