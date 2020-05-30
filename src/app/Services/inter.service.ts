import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class InterService {
  
  private interim = new BehaviorSubject<string>('');
  cast = this.interim.asObservable();

  constructor() { }
}
