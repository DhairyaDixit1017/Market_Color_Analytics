import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {IData} from './data';
import { Observable } from 'rxjs';
import {AvgvolComponent} from './avgvol/avgvol.component';
import{AvgstockComponent} from './avgstock/avgstock.component';
import { BehaviorSubject } from 'rxjs';

@Injectable()


export class DataservService {

  private _baseurl: string = "http://localhost:51535/data/average-volume-company/";

  private _baseurls: string = "http://localhost:51535/data/chartCompanyObject/";

  private _baseurlsSect: string = "http://localhost:51535/data/chartSectorObject/";

  private _baseurlsSelectAll: string = "http://localhost:51535/data/chartAvgCompanySectorObject/";

  private _baseurlvolsec: string = "http://localhost:51535/data/average-volume-sector/";

  private _baseurlstocksec: string = "http://localhost:51535/data/average-price-sector/";

  private interim1 = new BehaviorSubject<string>('');
  cast1 = this.interim1.asObservable();
  private hola1 = new BehaviorSubject<string[]>([]);
  ultra1 = this.hola1.asObservable();
  private hola2 = new BehaviorSubject<string[]>([]);
  ultra2 = this.hola2.asObservable();


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




  getDataVolSec(sec): Observable<IData[]>{
    console.log("in getdata this is "+ sec);
    return this.http.get<IData[]>(this._baseurlvolsec + sec);
  }

  getDataStockSec(sec): Observable<IData[]>{
    console.log("in getdata this is "+ sec);
    return this.http.get<IData[]>(this._baseurlstocksec + sec);
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

}
