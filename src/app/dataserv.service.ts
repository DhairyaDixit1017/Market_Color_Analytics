import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {IData} from './data';
import {IGoal} from './goal';
import { Observable } from 'rxjs';
import {AvgvolComponent} from './avgvol/avgvol.component';
import{AvgstockComponent} from './avgstock/avgstock.component';
import { BehaviorSubject } from 'rxjs';

@Injectable()


export class DataservService {

  public data2:any;

  private _baseurl: string = "http://localhost:51535/data/average-volume-company/";

  private _baseurls: string = "http://localhost:51535/data/chartCompanyObject/";

  private _baseurlsSect: string = "http://localhost:51535/data/chartSectorObject/";

  private _baseurlsSelectAll: string = "http://localhost:51535/data/chartAvgCompanySectorObject/";

  private _baseurlvolsec: string = "http://localhost:51535/data/average-volume-sector/";

  private _baseurlstocksec: string = "http://localhost:51535/data/average-price-sector/";

  private _baseurlsDataMonthP: string = "http://localhost:51535/data/chartCMCompany/";

  private _baseurlsDataMonthSectP: string = "http://localhost:51535/data/chartCMSector/";

  private _baseurlsDataMonthAllP: string = "http://localhost:51535/data/chartCMAvgCompanySector/";

  private _baseurlsDataWeekP: string = "http://localhost:51535/data/chartCWCompany/";

  private _baseurlsDataWeekSectP: string = "http://localhost:51535/data/chartCWSector/";

  private _baseurlsDataWeekAllP: string = "http://localhost:51535/data/chartCWAvgCompanySector/";

  private _baseurlsDataDailyP: string = "http://localhost:51535/data/chartCDCompany/";

  private _baseurlsDataDailySectP: string = "http://localhost:51535/data/chartCDSector/";

  private _baseurlsDataDailyAllP: string = "http://localhost:51535/data/chartCDAvgCompanySector/";



  private interim1 = new BehaviorSubject<string>('');
  cast1 = this.interim1.asObservable();
  private hola1 = new BehaviorSubject<string[]>([]);
  ultra1 = this.hola1.asObservable();
  private hola2 = new BehaviorSubject<string[]>([]);
  ultra2 = this.hola2.asObservable();
  private interim2 = new BehaviorSubject<string>('');
  cast2 = this.interim2.asObservable();
  private interim3 = new BehaviorSubject<string>('');
  cast3 = this.interim3.asObservable();
   private interim4 = new BehaviorSubject<string>('');
  cast4 = this.interim4.asObservable();


  constructor(private http: HttpClient) { }

  getData(tckr): Observable<any>{
    console.log("in getdata this is "+ tckr);
    return this.http.get(this._baseurl + tckr);
  }

  getDataS(tckr): Observable<any>{
    let myobj =  this.http.get(this._baseurls + tckr +"?type=price");
    return myobj;
  }

  getDataV(tckr): Observable<any>{
    let myobj1 =  this.http.get(this._baseurls + tckr +"?type=volume");
    return myobj1;
  }

  getDataSecP(tckr): Observable<any>{
    let myobj2 =  this.http.get(this._baseurlsSect + tckr +"?type=price");
    return myobj2;
  }

  getDataSecV(tckr): Observable<any>{
    let myobj3 =  this.http.get(this._baseurlsSect + tckr +"?type=volume");
    return myobj3;
  }

  getDataAllP(tckr,tckr1): Observable<any>{
    let myobj4 =  this.http.get(this._baseurlsSelectAll + tckr +"/"+ tckr1 +"?type=price");
    return myobj4;
  }

  getDataAllV(tckr,tckr1): Observable<any>{
    let myobj5 =  this.http.get(this._baseurlsSelectAll + tckr +"/"+ tckr1 +"?type=volume");
    return myobj5;
  }

  getDataMonthP(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj6 =  this.http.get<IGoal[]>(this._baseurlsDataMonthP + tckr +"/"+ tckr1 +"/"+ tckr2+"?type=price");
    return myobj6;
  }

  getDataMonthV(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj7 =  this.http.get<IGoal[]>(this._baseurlsDataMonthP + tckr +"/"+ tckr1 +"/"+ tckr2 +"?type=volume");
    return myobj7;
  }

  getDataMonthSectP(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj8 =  this.http.get<IGoal[]>(this._baseurlsDataMonthSectP + tckr +"/"+ tckr1 +"/"+ tckr2+"?type=price");
    return myobj8;
  }

  getDataMonthSectV(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj9 =  this.http.get<IGoal[]>(this._baseurlsDataMonthSectP + tckr +"/"+ tckr1 +"/"+ tckr2+"?type=volume");
    return myobj9;
  }

  getDataMonthAllP(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj10 =  this.http.get<IGoal[]>(this._baseurlsDataMonthAllP + tckr +"/"+ tckr1 +"/"+ tckr2 +"/"+ tckr3+"?type=price");
    return myobj10;
  }

  getDataMonthAllV(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj11 =  this.http.get<IGoal[]>(this._baseurlsDataMonthAllP + tckr +"/"+ tckr1 +"/"+ tckr2 +"/"+ tckr3+"?type=volume");
    return myobj11;
  }

  getDataWeekP(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj12 =  this.http.get<IGoal[]>(this._baseurlsDataWeekP + tckr +"/"+ tckr1 +"/"+ tckr2+"?type=price");
    return myobj12;
  }

   getDataWeekV(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj13 =  this.http.get<IGoal[]>(this._baseurlsDataWeekP + tckr +"/"+ tckr1 +"/"+ tckr2+"?type=volume");
    return myobj13;
  }

  getDataWeekSectP(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj14 =  this.http.get<IGoal[]>(this._baseurlsDataWeekSectP + tckr +"/"+ tckr1 +"/"+ tckr2+"?type=price");
    return myobj14;
  }

  getDataWeekSectV(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj15 =  this.http.get<IGoal[]>(this._baseurlsDataWeekSectP + tckr +"/"+ tckr1 +"/"+ tckr2+"?type=volume");
    return myobj15;
  }

  getDataWeekAllP(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj16 =  this.http.get<IGoal[]>(this._baseurlsDataWeekAllP + tckr +"/"+ tckr1 +"/"+ tckr2 +"/"+ tckr3+"?type=price");
    return myobj16;
  }

  getDataWeekAllV(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj17 =  this.http.get<IGoal[]>(this._baseurlsDataWeekAllP + tckr +"/"+ tckr1 +"/"+ tckr2 +"/"+ tckr3+"?type=volume");
    return myobj17;
  }

  getDataDailyP(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj18 =  this.http.get<IGoal[]>(this._baseurlsDataDailyP + tckr +"/"+ tckr1 +"/"+ tckr2+"?type=price");
    return myobj18;
  }

  getDataDailyV(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj19 =  this.http.get<IGoal[]>(this._baseurlsDataDailyP + tckr +"/"+ tckr1 +"/"+ tckr2+"?type=volume");
    return myobj19;
  }

  getDataDailySectP(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj20 =  this.http.get<IGoal[]>(this._baseurlsDataDailySectP + tckr +"/"+ tckr1 +"/"+ tckr2+"?type=price");
    return myobj20;
  }

  getDataDailySectV(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj21 =  this.http.get<IGoal[]>(this._baseurlsDataDailySectP + tckr +"/"+ tckr1 +"/"+ tckr2+"?type=volume");
    return myobj21;
  }

  getDataDailyAllP(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj22 =  this.http.get<IGoal[]>(this._baseurlsDataDailyAllP + tckr +"/"+ tckr1 +"/"+ tckr2 +"/"+ tckr3+"?type=price");
    return myobj22;
  }

  getDataDailyAllV(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj23 =  this.http.get<IGoal[]>(this._baseurlsDataDailyAllP + tckr +"/"+ tckr1 +"/"+ tckr2 +"/"+ tckr3+"?type=volume");
    return myobj23;
  }










  getDataVolSec(sec): Observable<IData[]>{
    console.log("in getdata this is "+ sec);
    return this.http.get<IData[]>(this._baseurlvolsec + sec);
  }

  getDataStockSec(sec): Observable<IData[]>{
    console.log("in getdata this is "+ sec);
    return this.http.get<IData[]>(this._baseurlstocksec + sec);
  }

  sendDataTo(tot){
    this.data2 = tot;
    this.getDataTo();
  }

  getDataTo(){
    return this.data2;
  }

  editInterim1(newInterim1){
    this.interim1.next(newInterim1);
  }

  editHola1(newHola1){
    this.hola1.next(newHola1);
  }

   editHola2(newHola2){
    this.hola2.next(newHola2);
  }

  editInterim2(newInterim2){
    this.interim2.next(newInterim2);
  }

  editInterim3(newInterim3){
    this.interim3.next(newInterim3);
  }
  editInterim4(newInterim4){
    this.interim4.next(newInterim4);
  }

}
