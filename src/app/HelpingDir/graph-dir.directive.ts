import { Directive, ElementRef, Renderer2 } from '@angular/core';
import {DataservService} from '../dataserv.service';

@Directive({
  selector: '[appGraphDir]'
})
export class GraphDirDirective {

  ctx:any;
  chart:any;
  data:any = {

     labels: ['PRE-COVID - 1-Jan-2020 to 09-Feb-2020', 'POST-COVID - 10-Feb-2020 till Today']
  }

  constructor(el: ElementRef, ren: Renderer2 ,private _dataService: DataservService) {

    var Chart = require('chart.js/dist/Chart');
    this.ctx = el.nativeElement.getContext('2d');
    this.chart = new Chart(this.ctx, {
      type:"bar",
      data:this.data
    });
    this._dataService.getDataTo().subscribe(data => {
      this.data = data;
      this.chart.update();
    });
    
   }

}
