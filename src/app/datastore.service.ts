import { Injectable } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-grids';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { DataModel } from './data-model';
import {map} from 'rxjs/operators';
import {formatDate} from '@angular/common';
import {GridBaseComponent} from './grid-base/grid-base.component';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService extends Subject<DataStateChangeEventArgs> {

  public startdate="2020-01-01";
  public date = formatDate(new Date(), 'yyyy/MM/dd', 'en');
  public enddate = this.date.replace(/\//g, "-");

  public sc=[];
  public scs=[];
  public rangedate=[];
  public url="";

  private _gridbase: GridBaseComponent;

  constructor(private http: HttpClient) { 
    super();
  }

  getSelCom(selected){
    this.sc = selected;
    console.log(this.sc + " is from getSelCom() datastoreservice")
  }

  getSelSec(selecteds){
    this.scs=selecteds;
    console.log(this.scs + " is from getSelSec() datastoreservice");
  }

  getDates(dates){
    this.rangedate = dates;
    this.startdate = this.rangedate[0];
    this.enddate = this.rangedate[1];
    console.log(this.rangedate + " is from getDates() datastoreservice")
    console.log("Start Date: " + this.startdate);
    console.log("End Date: " + this.enddate);
    const state: any = {skip: 0, take: 1000};
    this.execute(state);
  }

  public execute(state:any):void{

    console.log(" Inside execute() of datastoreservice");

      // url =  http://localhost:51535/data/grid/2020-03-03/2020-05-05?gotSectors=&gotTickers=C,ABT,AAPL

    this.url = "http://localhost:51535/data/grid/" + this.startdate+ "/" + this.enddate+"?gotSectors="+this.scs+"&gotTickers="+this.sc ;
    this.getData(state).subscribe(x =>
        super.next(x as DataStateChangeEventArgs));

  }

  getData(state?:any): Observable<any[]>{

    return this.http.get<DataModel[]>(this.url).pipe(
      map(
        (response:any)=>
        (<any>{
        result: state.take > 0 ? response.slice(0,state.take) : response,
        count: response.length
      })));


  }

}
