import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {IData} from './data';
import { Observable } from 'rxjs';
import {AvgvolComponent} from './avgvol/avgvol.component';
import{AvgstockComponent} from './avgstock/avgstock.component';

@Injectable({
  providedIn: 'root'
})
export class DataservService {

  private _baseurl: string = "http://localhost:51535/data/average-volume-company/";

  private _baseurls: string = "http://localhost:51535/data/average-price-company/";

  private _baseurlvolsec: string = "http://localhost:51535/data/average-volume-sector/";

  private _baseurlstocksec: string = "http://localhost:51535/data/average-price-sector/";

  constructor(private http: HttpClient) { }

  getData(tckr): Observable<IData[]>{
    console.log("in getdata this is "+ tckr);
    return this.http.get<IData[]>(this._baseurl + tckr);
  }

  getDataS(tckr): Observable<IData[]>{
    console.log("in getdatas this is "+ tckr);
    return this.http.get<IData[]>(this._baseurls + tckr);
  }

  getDataVolSec(sec): Observable<IData[]>{
    console.log("in getdata this is "+ sec);
    return this.http.get<IData[]>(this._baseurlvolsec + sec);
  }

  getDataStockSec(sec): Observable<IData[]>{
    console.log("in getdata this is "+ sec);
    return this.http.get<IData[]>(this._baseurlstocksec + sec);
  }

}
