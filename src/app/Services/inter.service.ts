import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class InterService {
  
  private interim = new BehaviorSubject<string>('');
  cast = this.interim.asObservable();
  private hola = new BehaviorSubject<string>('');
  ultra = this.hola.asObservable();

  constructor() { }

  editInterim(newInterim){
    this.interim.next(newInterim);
  }

  editHola(newHola){
    this.hola.next(newHola);
  }
}
