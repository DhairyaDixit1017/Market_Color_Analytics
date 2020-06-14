import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {IData} from './data';
import {IGoal} from './goal';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable()


export class DataservService {

  public data2:any;

  private _baseurl: string = "http://localhost:51535/data/average-volume-company/";

  private _baseurls: string = "http://localhost:51535/data/chartCompanyObject/";

  private _baseurlsSect: string = "http://localhost:51535/data/chartSectorObject/";

  private _baseurlsSelectCompAll: string = "http://localhost:51535/data/chartCompanySectorObject/";

  private _baseurlsSelectAll: string = "http://localhost:51535/data/chartAvgCompanySectorObject/";

  private _baseurlvolsec: string = "http://localhost:51535/data/average-volume-sector/";

  private _baseurlstocksec: string = "http://localhost:51535/data/average-price-sector/";

  private _baseurlsDataMonthP: string = "http://localhost:51535/data/chartCMCompany/";

  private _baseurlsDataMonthSectP: string = "http://localhost:51535/data/chartCMSector/";

  private _baseurlsDataMonthAllP: string = "http://localhost:51535/data/chartCMAvgCompanySector/";

  private _baseurlsDataMonthAllCompP: string = "http://localhost:51535/data/chartCMCompanySector/";

  private _baseurlsDataWeekP: string = "http://localhost:51535/data/chartCWCompany/";

  private _baseurlsDataWeekSectP: string = "http://localhost:51535/data/chartCWSector/";

  private _baseurlsDataWeekAllP: string = "http://localhost:51535/data/chartCWAvgCompanySector/";

  private _baseurlsDataWeekAllCompP: string = "http://localhost:51535/data/chartCWCompanySector/";

  private _baseurlsDataDailyP: string = "http://localhost:51535/data/chartCDCompany/";

  private _baseurlsDataDailySectP: string = "http://localhost:51535/data/chartCDSector/";

  private _baseurlsDataDailyAllP: string = "http://localhost:51535/data/chartCDAvgCompanySector/";

  private _baseurlsDataDailyAllCompP: string = "http://localhost:51535/data/chartCDCompanySector/";

   private _baseGraphurl: string = "http://localhost:51535/data/chart/";



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

  getDataCovP(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let my1 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"type=price"+"&"+"group=covid");
    return my1;
  }

  getDataCovV(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let my2 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"type=volume"+"&"+"group=covid");
    return my2;
  }

  getDataCovSectP(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let my3 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?sectorList="+tckr2+"&"+"type=price"+"&"+"group=covid");
    return my3;
  }

  getDataCovSectV(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let my4 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?sectorList="+tckr2+"&"+"type=volume"+"&"+"group=covid");
    return my4;
  }

  getDataCovOCompP(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let my5 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=price"+"&"+"group=covid");
    return my5;
  }

  getDataCovAllP(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let my6 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=price"+"&"+"group=covid"+"&"+"option=both");
    return my6;
  }

  getDataCovOCompV(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let my7 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=volume"+"&"+"group=covid");
    return my7;
  }

  getDataCovAllV(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let my8 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=volume"+"&"+"group=covid"+"&"+"option=both");
    return my8;
  }

  getDataCovCustDateP(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj99 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"type=price"+"&"+"group=covid"+"&"+"boundaryDate="+tckr3);
    return myobj99;
  }

  getDataCovCustDateSectP(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let my9 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?sectorList="+tckr2+"&"+"type=price"+"&"+"group=covid"+"&"+"boundaryDate="+tckr3);
    return my9;
  }

  getDataCovCustDateOCompP(tckr,tckr1,tckr2,tckr3,tckr4): Observable<IGoal[]>{
    let my10 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=price"+"&"+"group=covid"+"&"+"boundaryDate="+tckr4);
    return my10;
  }

  getDataCovCustDateAllP(tckr,tckr1,tckr2,tckr3,tckr4): Observable<IGoal[]>{
    let my11 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=price"+"&"+"group=covid"+"&"+"option=both"+"&"+"boundaryDate="+tckr4);
    return my11;
  }

  getDataCovCustDateV(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj99 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"type=volume"+"&"+"group=covid"+"&"+"boundaryDate="+tckr3);
    return myobj99;
  }

  getDataCovCustDateSectV(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let my9 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?sectorList="+tckr2+"&"+"type=volume"+"&"+"group=covid"+"&"+"boundaryDate="+tckr3);
    return my9;
  }

  getDataCovCustDateOCompV(tckr,tckr1,tckr2,tckr3,tckr4): Observable<IGoal[]>{
    let my10 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=volume"+"&"+"group=covid"+"&"+"boundaryDate="+tckr4);
    return my10;
  }

  getDataCovCustDateAllV(tckr,tckr1,tckr2,tckr3,tckr4): Observable<IGoal[]>{
    let my11 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=volume"+"&"+"group=covid"+"&"+"option=both"+"&"+"boundaryDate="+tckr4);
    return my11;
  }


  getDataS(tckr): Observable<any>{
    let myobj =  this.http.get(this._baseurls + tckr +"?type=price");
    return myobj;
  }

  getDataV(tckr): Observable<any>{
    let myobj1 =  this.http.get(this._baseurls + tckr +"?type=volume");
    return myobj1;
  }

  getDataMonthP(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj6 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"type=price"+"&"+"group=monthly");
    return myobj6;
  }

  getDataMonthV(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj7 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"type=volume"+"&"+"group=monthly");
    return myobj7;
  }

  getDataMonthSectP(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj8 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?sectorList="+tckr2+"&"+"type=price"+"&"+"group=monthly");
    return myobj8;
  }

  getDataMonthSectV(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj9 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?sectorList="+tckr2+"&"+"type=volume"+"&"+"group=monthly");
    return myobj9;
  }


  getDataMonthOCompP(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj10 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=price"+"&"+"group=monthly");
    return myobj10;
  }

  getDataMonthOCompV(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj10 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=volume"+"&"+"group=monthly");
    return myobj10;
  }


  getDataMonthAllP(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj10 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=price"+"&"+"group=monthly"+"&"+"option=both");
    return myobj10;
  }

  getDataMonthAllV(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj11 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=volume"+"&"+"group=monthly"+"&"+"option=both");
    return myobj11;
  }

  getDataWeekP(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj12 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"type=price"+"&"+"group=weekly");
    return myobj12;
  }

  getDataWeekV(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj13 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"type=volume"+"&"+"group=weekly");
    return myobj13;
  }

  getDataWeekSectP(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj14 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?sectorList="+tckr2+"&"+"type=price"+"&"+"group=weekly");
    return myobj14;
  }

  getDataWeekSectV(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj15 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?sectorList="+tckr2+"&"+"type=volume"+"&"+"group=weekly");
    return myobj15;
  }

  getDataWeekOCompP(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj16 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=price"+"&"+"group=weekly");
    return myobj16;
  }

  getDataWeekOCompV(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj17 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=volume"+"&"+"group=weekly");
    return myobj17;
  }


  getDataWeekAllP(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj18 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=price"+"&"+"group=weekly"+"&"+"option=both");
    return myobj18;
  }

  getDataWeekAllV(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj19 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=volume"+"&"+"group=weekly"+"&"+"option=both");
    return myobj19;
  }

  getDataDailyP(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj20 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"type=price"+"&"+"group=daily");
    return myobj20;
  }

  getDataDailyV(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj21 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"type=volume"+"&"+"group=daily");
    return myobj21;
  }

  getDataDailySectP(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj22 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?sectorList="+tckr2+"&"+"type=price"+"&"+"group=daily");
    return myobj22;
  }

  getDataDailySectV(tckr,tckr1,tckr2): Observable<IGoal[]>{
    let myobj23 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?sectorList="+tckr2+"&"+"type=volume"+"&"+"group=daily");
    return myobj23;
  }

  getDataDailyOCompP(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj24 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=price"+"&"+"group=daily");
    return myobj24;
  }

  getDataDailyOCompV(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj25 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=volume"+"&"+"group=daily");
    return myobj25;
  }


  getDataDailyAllP(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj26 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=price"+"&"+"group=daily"+"&"+"option=both");
    return myobj26;
  }

  getDataDailyAllV(tckr,tckr1,tckr2,tckr3): Observable<IGoal[]>{
    let myobj27 =  this.http.get<IGoal[]>(this._baseGraphurl+tckr+"/"+tckr1+"?tickerList="+tckr2+"&"+"sectorList="+tckr3+"&"+"type=volume"+"&"+"group=daily"+"&"+"option=both");
    return myobj27;
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