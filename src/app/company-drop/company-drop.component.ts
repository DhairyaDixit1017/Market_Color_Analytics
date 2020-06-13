import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {DataservService} from '../dataserv.service';
import {ChartModule} from 'primeng/chart';
import { SimpleChanges } from '@angular/core';
import { UIChart } from 'primeng/primeng';
import { DatastoreService } from '../datastore.service';
import {IGoal} from '.././goal';

@Component({
  selector: 'app-company-drop',
  templateUrl: './company-drop.component.html',
  styleUrls: ['./company-drop.component.css']
})
export class CompanyDropComponent implements OnInit {

  public companies: SelectItem[];
  public selectedCompanies: string[] = [];
  public shareCompanies: string[];
  public sectors: SelectItem[];
  public selectedSectors: string[] = [];
  public shareSectors: string[];
  public decider:string;
  public data:any;
  data2:IGoal;
  choose=false;
  users: User[];
  cols: any[];
  Mode: SelectItem[];
  selectedModel: Modes;
  startDate:string;
  endDate:string;
  Friday: SelectItem[];
  selectedFri:Toggy;
  // grouping:string;
  datesmodef: DateRange[];
  selectedDate:DateRange;
  house:string;
  toll=false;
  date1: Date;
  rangeDates: Date[];
  picks:any;

  @ViewChild('chart') chart: UIChart;
  @ViewChild('chartline') chart1: UIChart;
  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes.inputData.currentValue) {
  //     console.log(this.chart);
  //     // this.chart.data = this.data2;
  //    // then chart is getting updated
  //     setTimeout(() => {
  //       this.chart.reinit();
  //     }, 500);
  //      setTimeout(() => {
  //       this.chart1.reinit();
  //     }, 500);
  //   }
  // }


  sendSelected(){
    console.log(this.selectedCompanies+" this is from sendSelected() inside companydrop");
    this._datastoreservice.getSelCom(this.selectedCompanies);
}

  sendSelectedSector(){
    console.log(this.selectedSectors+" this is from sendSelectedSector() inside companydrop");
    this._datastoreservice.getSelSec(this.selectedSectors);
}

  setModeG(){
    this.house=this.selectedDate.name;
    console.log(this.house);
  }

  shouldTime(){
    if(this.choose==true)
    {
      setTimeout(() => {
        this.soft(event);
      }, 500);
    }
  }



  sendPrice(){
    if(this.shareSectors.length==0)
    {
      this.toll=false;
      console.log(100);
      this._dataService.getDataS(this.shareCompanies)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = ['PRE-COVID - 1-Jan-2020 to 09-Feb-2020', 'POST-COVID - 10-Feb-2020 till Today'];
          this.data2.datasets = this.data;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 500);
      setTimeout(() => {
        this.chart1.reinit();
      }, 500);
    }
    else if(this.shareCompanies.length==0)
    {
      this.toll=false;
      console.log(500);
      this._dataService.getDataSecP(this.shareSectors)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = ['PRE-COVID - 1-Jan-2020 to 09-Feb-2020', 'POST-COVID - 10-Feb-2020 till Today'];
          this.data2.datasets = this.data;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 500);
      setTimeout(() => {
        this.chart1.reinit();
      }, 500);
    }
    else{
      this.toll=true;
      console.log(3000);

      if(this.selectedFri.give=="Only Companies")
      {
        this._dataService.getDataCompP(this.shareCompanies,this.shareSectors)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = ['PRE-COVID - 1-Jan-2020 to 09-Feb-2020', 'POST-COVID - 10-Feb-2020 till Today'];
          this.data2.datasets = this.data;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 800);
      setTimeout(() => {
        this.chart1.reinit();
      }, 800);

      }

      else{
      this._dataService.getDataAllP(this.shareCompanies,this.shareSectors)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = ['PRE-COVID - 1-Jan-2020 to 09-Feb-2020', 'POST-COVID - 10-Feb-2020 till Today'];
          this.data2.datasets = this.data;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 800);
      setTimeout(() => {
        this.chart1.reinit();
      }, 800);
    }
    }
  }


  sendVols(){
     if(this.shareSectors.length==0)
    {
      this.toll=false;
    console.log(100);
    this._dataService.getDataV(this.shareCompanies)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = ['PRE-COVID - 1-Jan-2020 to 09-Feb-2020', 'POST-COVID - 10-Feb-2020 till Today'];
          this.data2.datasets = this.data;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 500);
      setTimeout(() => {
        this.chart1.reinit();
      }, 500);
    }
    else if(this.shareCompanies.length==0)
    {
      this.toll=false;
      console.log(500);
      this._dataService.getDataSecV(this.shareSectors)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = ['PRE-COVID - 1-Jan-2020 to 09-Feb-2020', 'POST-COVID - 10-Feb-2020 till Today'];
          this.data2.datasets = this.data;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 500);
      setTimeout(() => {
        this.chart1.reinit();
      }, 500);
    }
    else{
      this.toll=true;
      console.log(3000);
     if(this.selectedFri.give=="Only Companies")
      {
        this._dataService.getDataCompV(this.shareCompanies,this.shareSectors)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = ['PRE-COVID - 1-Jan-2020 to 09-Feb-2020', 'POST-COVID - 10-Feb-2020 till Today'];
          this.data2.datasets = this.data;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 800);
      setTimeout(() => {
        this.chart1.reinit();
      }, 800);

      }
      else{
      this._dataService.getDataAllV(this.shareCompanies,this.shareSectors)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = ['PRE-COVID - 1-Jan-2020 to 09-Feb-2020', 'POST-COVID - 10-Feb-2020 till Today'];
          this.data2.datasets = this.data;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 800);
      setTimeout(() => {
        this.chart1.reinit();
      }, 800);
    }
    }
  }

  sendMonthPrice(){
    if(this.shareSectors.length==0)
    {
      this.toll=false;
      console.log(100);
      this._dataService.getDataMonthP(this.shareCompanies ,this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 500);
      setTimeout(() => {
        this.chart1.reinit();
      }, 500);
    }
    else if(this.shareCompanies.length==0)
    {
      this.toll=false;
      console.log(500);
      this._dataService.getDataMonthSectP(this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 500);
      setTimeout(() => {
        this.chart1.reinit();
      }, 500);
    }
    else{
      this.toll=true;
      console.log(3000);

       if(this.selectedFri.give=="Only Companies")
      {
        this._dataService.getDataMonthAllCompP(this.shareCompanies,this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 800);
      setTimeout(() => {
        this.chart1.reinit();
      }, 800);
      }

      else{
      this._dataService.getDataMonthAllP(this.shareCompanies,this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 800);
      setTimeout(() => {
        this.chart1.reinit();
      }, 800);
    }
  }
  }



  sendMonthVolume(){
    if(this.shareSectors.length==0)
    {
      this.toll=false;
      console.log(100);
      this._dataService.getDataMonthV(this.shareCompanies ,this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 500);
      setTimeout(() => {
        this.chart1.reinit();
      }, 500);
    }
    else if(this.shareCompanies.length==0)
    {
      this.toll=false;
      console.log(500);
      this._dataService.getDataMonthSectV(this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 500);
      setTimeout(() => {
        this.chart1.reinit();
      }, 500);
    }
    else{
      this.toll=true;
      console.log(3000);
       if(this.selectedFri.give=="Only Companies")
      {
        this._dataService.getDataMonthAllCompV(this.shareCompanies,this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 800);
      setTimeout(() => {
        this.chart1.reinit();
      }, 800);
      }

      else{
      this._dataService.getDataMonthAllV(this.shareCompanies,this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 800);
      setTimeout(() => {
        this.chart1.reinit();
      }, 800);
    }
  }
  }


  sendWeekPrice()
  {
    if(this.shareSectors.length==0)
    {
      this.toll=false;
      console.log(100);
      this._dataService.getDataWeekP(this.shareCompanies ,this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 500);
      setTimeout(() => {
        this.chart1.reinit();
      }, 500);
    }
    else if(this.shareCompanies.length==0)
    {
      this.toll=false;
      console.log(500);
      this._dataService.getDataWeekSectP(this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 500);
      setTimeout(() => {
        this.chart1.reinit();
      }, 500);
    }
    else{
      this.toll=true;
      console.log(3000);

       if(this.selectedFri.give=="Only Companies")
      {
        this._dataService.getDataWeekAllCompP(this.shareCompanies,this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 800);
      setTimeout(() => {
        this.chart1.reinit();
      }, 800);
      }

      else{
      this._dataService.getDataWeekAllP(this.shareCompanies,this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 800);
      setTimeout(() => {
        this.chart1.reinit();
      }, 800);
    }
  }
  }



  sendWeekVolume()
  {
    if(this.shareSectors.length==0)
    {
      this.toll=false;
      console.log(100);
      this._dataService.getDataWeekV(this.shareCompanies ,this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 500);
      setTimeout(() => {
        this.chart1.reinit();
      }, 500);
    }
    else if(this.shareCompanies.length==0)
    {
      this.toll=false;
      console.log(500);
      this._dataService.getDataWeekSectV(this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 500);
      setTimeout(() => {
        this.chart1.reinit();
      }, 500);
    }
    else{
      this.toll=true;
      console.log(3000);

       if(this.selectedFri.give=="Only Companies")
      {
        this._dataService.getDataWeekAllCompV(this.shareCompanies,this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 800);
      setTimeout(() => {
        this.chart1.reinit();
      }, 800);
      }

      else{
      this._dataService.getDataWeekAllV(this.shareCompanies,this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 800);
      setTimeout(() => {
        this.chart1.reinit();
      }, 800);
    }
  }
  }




  sendDailyPrice()
  {
    if(this.shareSectors.length==0)
    {
      this.toll=false;
      console.log(100);
      this._dataService.getDataDailyP(this.shareCompanies ,this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 500);
      setTimeout(() => {
        this.chart1.reinit();
      }, 500);
    }
    else if(this.shareCompanies.length==0)
    {
      this.toll=false;
      console.log(500);
      this._dataService.getDataDailySectP(this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 500);
      setTimeout(() => {
        this.chart1.reinit();
      }, 500);
    }
    else{
      this.toll=true;
      console.log(3000);

       if(this.selectedFri.give=="Only Companies")
      {
        this._dataService.getDataDailyAllCompP(this.shareCompanies,this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 800);
      setTimeout(() => {
        this.chart1.reinit();
      }, 800);
      }

      else{
      this._dataService.getDataDailyAllP(this.shareCompanies,this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 800);
      setTimeout(() => {
        this.chart1.reinit();
      }, 800);
    }
  }
  }


  sendDailyVolume()
  {
    if(this.shareSectors.length==0)
    {
      this.toll=false;
      console.log(100);
      this._dataService.getDataDailyV(this.shareCompanies ,this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 500);
      setTimeout(() => {
        this.chart1.reinit();
      }, 500);
    }
    else if(this.shareCompanies.length==0)
    {
      this.toll=false;
      console.log(500);
      this._dataService.getDataDailySectV(this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 500);
      setTimeout(() => {
        this.chart1.reinit();
      }, 500);
    }
    else{
      this.toll=true;
      console.log(3000);

       if(this.selectedFri.give=="Only Companies")
      {
        this._dataService.getDataDailyAllCompV(this.shareCompanies,this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 800);
      setTimeout(() => {
        this.chart1.reinit();
      }, 800);
      }

      else{
      this._dataService.getDataDailyAllV(this.shareCompanies,this.shareSectors, this.startDate,this.endDate)
      .subscribe(data => 
        {
          this.data =data;
          this.data2.labels = this.data.labels;
          this.data2.datasets = this.data.datasets;
          console.log(data);
        });
        setTimeout(() => {
        this.chart.reinit();
      }, 800);
      setTimeout(() => {
        this.chart1.reinit();
      }, 800);
    }
  }
  }




  setchoose(){
      this.choose=true;
  }

  // setTime(){
  //   setTimeout(() => {
  //       this.chart.reinit();
  //     }, 100);
  //     setTimeout(() => {
  //       this.chart1.reinit();
  //     }, 100);
  // }



  soft(event){
    console.log("Soft");
    console.log(this.data2);
    if(this.house=="Pre Covid vs Post Covid")
    {
      if(this.selectedModel.take=="Stock Price")
      {
        this.setPrice();
        this.sendPrice();
      }
      else if(this.selectedModel.take=="Volume")
      {
        this.setVolume();
        this.sendVols();
      }
    }
    else if(this.house=="Monthly")
    {
      if(this.selectedModel.take=="Stock Price")
      {
        this.setPrice();
        this.sendMonthPrice();
      }
      else if(this.selectedModel.take=="Volume")
      {
        this.setVolume();
        this.sendMonthVolume();
      }
    }
    else if(this.house=="Weekly")
    {
      if(this.selectedModel.take=="Stock Price")
      {
        this.setPrice();
        this.sendWeekPrice();
      }
      else if(this.selectedModel.take=="Volume")
      {
        this.setVolume();
        this.sendWeekVolume();
      }
    }
    else if(this.house=="Daily")
    {
      if(this.selectedModel.take=="Stock Price")
      {
        this.setPrice();
        this.sendDailyPrice();
      }
      else if(this.selectedModel.take=="Volume")
      {
        this.setVolume();
        this.sendDailyVolume();
      }
    }
  }


    constructor(private _dataService: DataservService, private _datastoreservice: DatastoreService) {

        this.datesmodef = [
      {name: 'Pre Covid vs Post Covid'},
      {name: 'Weekly'},
      {name: 'Monthly'},
      {name: 'Daily'},
    
      ];


      this.Mode = [
            {label:'Stock Price', value:{take: 'Stock Price'}},
            {label:'Volume', value:{take: 'Volume'}}
        ];

      this.Friday = [
            {label:'Only Companies', value:{give: 'Only Companies'}},
            {label:'Companies and Sectors', value:{give: 'Companies and Sectors'}}
        ];
      



        this.data2 = 
        {
            labels: [],
            datasets:[]
        }

        this.companies = [
            {label: 'AAPL - APPLE INC', value: 'AAPL'},
            {label: 'ABT - ABBOTT LABORATORIES', value: 'ABT'},
            {label: 'ABBV - ABBVIE INC', value: 'ABBV'},
            {label: 'ACN - ACCENTURE PLC', value: 'ACN'},
            {label: 'AMD - ADVANCED MICRO DEVICES', value: 'AMD'},
            {label: 'BABA - ALIBABA GROUP HOLDING LTD', value: 'BABA'},
            {label: 'MO - ALTRIA GROUP INC', value: 'MO'},
            {label: 'AXP - AMERICAN EXPRESS CO', value: 'AXP'},
            {label: 'AMT - AMERICAN TOWER CORP', value: 'AMT'},
            {label: 'ANTM - ANTHEM INC', value: 'ANTM'},
            {label: 'AINV - APOLLO INVESTMENT CORP', value: 'AINV'},
            {label: 'AZN - ASTRAZENECA PLC', value: 'AZN'},
            {label: 'T - AT&T INC', value: 'T'},
            {label: 'BKR - BAKER HUGHES CO', value: 'BKR'},
            {label: 'BSBR - BANCO SANTANDER BRASIL SA', value: 'BSBR'},
            {label: 'BSAC - BANCO SANTANDER CHILE', value: 'BSAC'},
            {label: 'BSMX - BANCO SANTANDER MEXICO SA INSTITUCION DE BANCA MULTIPLE GRUPO FINANCIERO SANTAND', value: 'BSMX'},
            {label: 'BCDRF - BANCO SANTANDER SA', value: 'BCDRF'},
            {label: 'BAC - BANK OF AMERICA CORP', value: 'BAC'},
            {label: 'BNS - BANK OF NOVA SCOTIA/THE', value: 'BNS'},
            {label: 'BBBY - BED BATH & BEYOND INC', value: 'BBBY'},
            {label: 'BDX - BECTON DICKINSON AND CO', value: 'BDX'},
            {label: 'BBY - BEST BUY CO INC', value: 'BBY'},
            {label: 'BLK - BLACKROCK INC', value: 'BLK'},
            {label: 'BMY - BRISTOL-MYERS SQUIBB CO', value: 'BMY'},
            {label: 'BTI - BRITISH AMERICAN TOBACCO PLC', value: 'BTI'},
            {label: 'CNI - CANADIAN NATIONAL RAILWAY CO', value: 'CNI'},
            {label: 'CAT - CATERPILLAR INC', value: 'CAT'},
            {label: 'CATY - CATHAY GENERAL BANCORP', value: 'CATY'},
            {label: 'LFC - CHINA LIFE INSURANCE CO LTD', value: 'LFC'},
            {label: 'SNP - CHINA PETROLEUM  CHEMICAL CORP', value: 'SNP'},
            {label: 'C - CITIGROUP INC', value: 'C'},
            {label: 'COST - COSTCO WHOLESALE CORP', value: 'COST'},
            {label: 'CVS - CVS HEALTH CORP', value: 'CVS'},
            {label: 'DB - DEUTSCHE BANK AG-REGISTERED', value: 'DB'},
            {label: 'DEO - DIAGEO PLC', value: 'DEO'},
            {label: 'D - DOMINION ENERGY INC', value: 'D'},
            {label: 'DPZ - DOMINOS PIZZA INC', value: 'DPZ'},
            {label: 'DUK - DUKE ENERGY CORP', value: 'DUK'},
            {label: 'EIGR - EIGER BIOPHARMACEUTICALS INC', value: 'EIGR'},
            {label: 'LLY - ELI LILLY AND CO', value: 'LLY'},
            {label: 'ENB - ENBRIDGE IN', value: 'ENB'},
            {label: 'EFX - EQUIFAX INC', value: 'EFX'},
            {label: 'EQNR - EQUINOR ASA', value: 'EQNR'},
            {label: 'EL - ESTEE LAUDER COS INCTHE', value: 'EL'},
            {label: 'ETON - ETON PHARMACEUTICALS INC', value: 'ETON'},
            {label: 'XOM - EXXON MOBIL CORP', value: 'XOM'},
            {label: 'FDX - FEDEX CORP', value: 'FDX'},
            {label: 'FCAU - FIAT CHRYSLER AUTOMOBILES NV', value: 'FCAU'},
            {label: 'FIS - FIDELITY NATIONAL INFORMATION SERVICES INC', value: 'FIS'},
            {label: 'FTS - FORTIS INC', value: 'FTS'},
            {label: 'GE - GENERAL ELECTRIC CO', value: 'GE'},
            {label: 'GSK - GLAXOSMITHKLINE PLC', value: 'GSK'},
            {label: 'GS - GOLDMAN SACHS GROUP INC/THE', value: 'GS'},
            {label: 'GRPN - GROUPON INC', value: 'GRPN'},
            {label: 'GRUB - GRUBHUB INC', value: 'GRUB'},
            {label: 'HOG - HARLEY-DAVIDSON INC', value: 'HOG'},
            {label: 'HPE - HEWLETT PACKARD ENTERPRISE', value: 'HPE'},
            {label: 'HD - HOME DEPOT INCTHE', value: 'HD'},
            {label: 'HON - HONEYWELL INTERNATIONAL INC', value: 'HON'},
            {label: 'HSBC - HSBC HOLDINGS PLC', value: 'HSBC'},
            {label: 'JNJ - JOHNSON & JOHNSON', value: 'JNJ'},
            {label: 'JPM - JPMORGAN CHASE  CO', value: 'JPM'},
            {label: 'K - KELLOGG CO', value: 'K'},
            {label: 'KEYS - KEYSIGHT TECHNOLOGIES IN', value: 'KEYS'},
            {label: 'LMT - LOCKHEED MARTIN CORP', value: 'LMT'},
            {label: 'MA - MASTERCARD INC', value: 'MA'},
            {label: 'MDT - MEDTRONIC PLC', value: 'MDT'},
            {label: 'MCHP - MICROCHIP TECHNOLOGY INC', value: 'MCHP'},
            {label: 'MBFJF - MITSUBISHI UFJ FINANCIAL GROUP INC', value: 'MBFJF'},
            {label: 'MS - MORGAN STANLEY', value: 'MS'},
            {label: 'MUR - MURPHY OIL CORP', value: 'MUR'},
            {label: 'NEE - NEXTERA ENERGY INC', value: 'NEE'},
            {label: 'NKE - NIKE INC', value: 'NKE'},
            {label: 'NVS - NOVARTIS AG', value: 'NVS'},
            {label: 'NVO - NOVO NORDISK A/S', value: 'NVO'},
            {label: 'NVDA - NVIDIA CORP', value: 'NVDA'},
            {label: 'PBR - PETROLEO BRASILEIRO SA', value: 'PBR'},
            {label: 'PFE - PFIZER INC', value: 'PFE'},
            {label: 'PM - PHILIP MORRIS INTERNATIONAL INC', value: 'PM'},
            {label: 'PNC - PNC FINANCIAL SERVICES GROUP INC/THE', value: 'PNC'},
            {label: 'PROCTER & GAMBLE CO/THE', value: 'PG'},
            {label: 'RIO - RIO TINTO PLC', value: 'RIO'},
            {label: 'RY - ROYAL BANK OF CANADA', value: 'RY'},
            {label: 'CRM - SALESFORCE.COM INC', value: 'CRM'},
            {label: 'SAP - SAP SE', value: 'SAP'},
            {label: 'WORK - SLACK TECHNOLOGIES INC- CL A', value: 'WORK'},
            {label: 'TSM - TAIWAN SEMICONDUCTOR MANUFACTURING CO LTD', value: 'TSM'},
            {label: 'TMO - THERMO FISHER SCIENTIFIC INC', value: 'TMO'},
            {label: 'TM - TOYOTA MOTOR CORP', value: 'TM'},
            {label: 'UN - UNILEVER NV', value: 'UN'},
            {label: 'UNP - UNION PACIFIC CORP', value: 'UNP'},
            {label: 'UPS - UNITED PARCEL SERVICE INC', value: 'UPS'},
            {label: 'UTX - UNITED TECHNOLOGIES CORP', value: 'UTX'},
            {label: 'UNH - UNITEDHEALTH GROUP INC', value: 'UNH'},
            {label: 'V - VISA INC', value: 'V'},
            {label: 'VMW - VMWARE INC', value: 'VMW'},
            {label: 'WMT - WALMART INC', value: 'WMT'},
            {label: 'DIS - WALT DISNEY CO/THE', value: 'DIS'},
            {label: 'WFC - WELLS FARGO & CO', value: 'WFC'},

        ];

         this.sectors = [
            {label: 'BASIC INDUSTRIES', value: 'Basic Industries'},
            {label: 'CAPITAL GOODS', value: 'Capital Goods'},
            {label: 'CONSUMER NON-DURABLES', value: 'Consumer Non-Durables'},
            {label: 'CONSUMER SERVICES', value: 'Consumer Services'},
            {label: 'ENERGY', value: 'Energy'},
            {label: 'FINANCE', value: 'Finance'},
            {label: 'HEALTH CARE', value: 'Health Care'},
            {label: 'MISCELLANEOUS', value: 'Miscellaneous'},
            {label: 'PUBLIC UTILITIES', value: 'Public Utilities'},
            {label: 'RETAIL', value: 'Retail'},
            {label: 'TECHNOLOGY', value: 'Technology'},
            {label: 'TRANSPORTATION', value: 'Transportation'},
            
        ];


    }
  ngOnInit(): void {
    this._dataService.cast1.subscribe(decider=> this.decider=decider);
    this._dataService.ultra1.subscribe(shareCompanies=> this.shareCompanies=shareCompanies);
    this._dataService.ultra2.subscribe(shareSectors=> this.shareSectors=shareSectors);
    // this._dataService.cast2.subscribe(startDate=> this.startDate=startDate);
    // this._dataService.cast3.subscribe(endDate=> this.endDate=endDate);
    // this._dataService.cast4.subscribe(grouping=> this.grouping=grouping);
    this.users = [
      { month: 'January', pre: '65',post:'28' },
      { month: 'February', pre: '59',post:'48' },
      { month: 'March', pre: '80',post:'40' },
      { month: 'April', pre: '81',post:'19' },
      { month: 'May', pre: '56',post:'86' },
      { month: 'June', pre: '55',post:'27' },
      { month: 'July', pre: '40',post:'90' },
  ];
    this.cols = [
        { field: 'month', header: 'Month' },
        { field: 'pre', header: 'PRE-COVID' },
        { field: 'post', header: 'POST-COVID' },
    ];

        let today = new Date();
        let firstDate = new Date('01/01/2020');
        this.rangeDates = [ firstDate, today];
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;

  }

  sendDates(){
    console.log(this.rangeDates);
    let start = this.rangeDates[0];
    var startString = new Date(start.getTime() - (start.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
    let end = this.rangeDates[1];
    var endString = new Date(end.getTime() - (end.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
    let range = [startString, endString];
    this.picks=range;
    console.log(this.picks);
    this.startDate=this.picks[0];
    this.endDate=this.picks[1];
    // this._dataService.editInterim2(this.picks[0]);
    // this._dataService.editInterim3(this.picks[1]);
    // console.log(this.selectedDate.name);
    // this._dataService.editInterim4(this.selectedDate.name);
    // this._datastoreservice.getDates(range);
}

sendDatesGrid(){
  let start = this.rangeDates[0];
  var startString = new Date(start.getTime() - (start.getTimezoneOffset() * 60000 ))
                  .toISOString()
                  .split("T")[0];
  let end = this.rangeDates[1];
  var endString = new Date(end.getTime() - (end.getTimezoneOffset() * 60000 ))
                  .toISOString()
                  .split("T")[0];
  let range = [startString, endString];
  this._datastoreservice.getDates(range);
}
        
  setPrice(){
    this._dataService.editHola1(this.selectedCompanies);
    this._dataService.editHola2(this.selectedSectors);
    console.log(this.shareCompanies);
    console.log(this.shareSectors);
    this._dataService.editInterim1("Price");
}

setVolume(){
    this._dataService.editHola1(this.selectedCompanies);
    this._dataService.editHola2(this.selectedSectors);
    console.log(this.shareCompanies);
    console.log(this.shareSectors);
    this._dataService.editInterim1("Volume");
}

}
export interface User {
  month;
  pre;
  post;
}
interface Modes {
  take: string;
}
interface DateRange {
  name: string;
}

interface Toggy {
  give: string;
}