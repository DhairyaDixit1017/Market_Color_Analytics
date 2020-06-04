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
  public name="";
  public val="";
  public v="";
  public tickers = [];
  public tut: number[] =[];
  temp : number;

  constructor(private _dataService: DataservService) { 

    this.tickers = ["ABBV","ABT","ACN","AMT","ANTM","AXP","AZN","BABA","BAC",
    "BCDRF","BDX","BLK","BMY","BNS","BSAC","BSBR","BSMX","BTI","C","CAT","CNI",
    "CRM","CVS","D","DEO","DUK","EL","ENB","EQNR","FIS","GE","GS","GSK","HD","HON",
    "HSBC","JNJ","JPM","LFC","LLY","LMT","MA","MBFJF","MDT","MO","MS","NEE","NKE","NVO",
    "NVS","PBR","PFE","PM","PNC","RIO","RY","SAP","SNP","T","TM","TMO","TSM","UN","UNH",
    "UNP","UPS","UTX","XOM"];

  }

  ngOnInit(): void {
  }

  sendVals(val){
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
    this._dataService.getDataS(this.v)
      .subscribe(data => 
        {this.data = data;
        //this.temp = data.preCovidPrice;
        this.tut.push(this.temp);
        });
  }

  diss(value) {

    var myDemo = document.getElementById('demos');
    for(let i in this.tickers){
        if(value==this.tickers[i]){
          console.log(value);
          myDemo.style.display="block";
          this.val=value;
          break;
        }
        else console.log("No Matches");
        }
    }

}
