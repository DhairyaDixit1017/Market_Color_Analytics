import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {DataservService} from '../dataserv.service';
import {ChartModule} from 'primeng/chart';
import { SimpleChanges } from '@angular/core';
import { UIChart } from 'primeng/primeng';
import { DatastoreService } from '../datastore.service';
import {IGoal} from '.././goal';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})

export class MastersComponent implements OnInit
{
  public companies: SelectItem[];
  public selectedCompanies: string[] = [];
  public shareCompanies: string[];
  public sectors: SelectItem[];
  public selectedSectors: string[] = [];
  public shareSectors: string[];
  public decider:string;
  public data:any;
  data2:IGoal;
  cols: any[];
  Mode: SelectItem[];
  selectedModel: Modes;
  startDate:string;
  endDate:string;
  daycare:string;
  Friday: SelectItem[];
  selectedFri:Toggy;
  datesmodef: DateRange[];
  selectedDate:DateRange;
  house:string;
  toll=false;
  date1: Date;
  today: Date;
  firstDate: Date;
  rangeDates: Date[];
  picks:any;
  atom=false;
  CovidDate:string = "2020-02-09";
  dest=false;
  options:any;

  @ViewChild('chart') chart: UIChart;
  @ViewChild('chartline') chart1: UIChart;
 

  // Lock Selected Companies from Filters
  sendSelected()
  {
    console.log(this.selectedCompanies+" this is from sendSelected() inside companydrop");
    this._datastoreservice.getSelCom(this.selectedCompanies);
  }

  // Lock Selected Sectors from Filters
  sendSelectedSector()
  {
    console.log(this.selectedSectors+" this is from sendSelectedSector() inside companydrop");
    this._datastoreservice.getSelSec(this.selectedSectors);
  }

  // Lock Selected Grouping Method from Filters
  setModeG()
  {
    this.house=this.selectedDate.name;
    console.log(this.house);
  }

  // Function to call soft on clicking APPLY, after 600ms
  shouldTime()
  {
    setTimeout(() => {
      this.soft(event);
    }, 600);
  }

  // Function to call soft on chaning Transition Date, after 600ms
  shouldTransTime()
  {
    setTimeout(() => {
      this.soft(event);
    }, 600);
  }
  

  // Function to get Stock Price info for Pre vs Post Covid Grouping
  sendPrice()
  {
    if(this.CovidDate!="2020-02-09")
    {
      if(this.shareSectors.length==0)
      {
        this.toll=false;
        console.log(100);
        this._dataService.getDataCovCustDateP(this.startDate,this.endDate,this.shareCompanies,this.CovidDate)
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
        this._dataService.getDataCovCustDateSectP(this.startDate,this.endDate,this.shareSectors,this.CovidDate)
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

      else
      {
        this.toll=true;
        console.log(3000);
        if(this.selectedFri.give=="Only Companies")
        {
          this._dataService.getDataCovCustDateOCompP(this.startDate,this.endDate,this.shareCompanies,this.shareSectors,this.CovidDate)
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
        else
        {
          this._dataService.getDataCovCustDateAllP(this.startDate,this.endDate,this.shareCompanies,this.shareSectors,this.CovidDate)
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

    else
    {
      if(this.shareSectors.length==0)
      {
        this.toll=false;
        console.log(100);
        this._dataService.getDataCovP(this.startDate,this.endDate,this.shareCompanies)
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
        this._dataService.getDataCovSectP(this.startDate,this.endDate,this.shareSectors)
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

      else
      {
        this.toll=true;
        console.log(3000);
        if(this.selectedFri.give=="Only Companies")
        {
          this._dataService.getDataCovOCompP(this.startDate,this.endDate,this.shareCompanies,this.shareSectors)
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
        else
        {
          this._dataService.getDataCovAllP(this.startDate,this.endDate,this.shareCompanies,this.shareSectors)
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
  }


  // Function to get Volume info for Pre vs Post Covid Grouping
  sendVols()
  {
    if(this.CovidDate!="2020-02-09")
    {
      if(this.shareSectors.length==0)
      {
        this.toll=false;
        console.log(100);
        this._dataService.getDataCovCustDateV(this.startDate,this.endDate,this.shareCompanies,this.CovidDate)
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
        this._dataService.getDataCovCustDateSectV(this.startDate,this.endDate,this.shareSectors,this.CovidDate)
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

      else
      {
        this.toll=true;
        console.log(3000);
        if(this.selectedFri.give=="Only Companies")
        {
          this._dataService.getDataCovCustDateOCompV(this.startDate,this.endDate,this.shareCompanies,this.shareSectors,this.CovidDate)
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

        else
        {
          this._dataService.getDataCovCustDateAllV(this.startDate,this.endDate,this.shareCompanies,this.shareSectors,this.CovidDate)
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
    
    else
    {
      if(this.shareSectors.length==0)
      {
        this.toll=false;
        console.log(100);
        this._dataService.getDataCovV(this.startDate,this.endDate,this.shareCompanies)
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
        this._dataService.getDataCovSectV(this.startDate,this.endDate,this.shareSectors)
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

      else
      {
        this.toll=true;
        console.log(3000);
        if(this.selectedFri.give=="Only Companies")
        {
          this._dataService.getDataCovOCompV(this.startDate,this.endDate,this.shareCompanies,this.shareSectors)
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
        else
        {
          this._dataService.getDataCovAllV(this.startDate,this.endDate,this.shareCompanies,this.shareSectors)
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
  }


  // Function to get Stock Price info for Monthly Grouping
  sendMonthPrice()
  {
    if(this.shareSectors.length==0)
    {
      this.toll=false;
      console.log(100);
      this._dataService.getDataMonthP(this.startDate,this.endDate,this.shareCompanies)
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
      this._dataService.getDataMonthSectP(this.startDate,this.endDate,this.shareSectors)
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

    else
    {
      this.toll=true;
      console.log(3000);
      if(this.selectedFri.give=="Only Companies")
      {
        this._dataService. getDataMonthOCompP(this.startDate,this.endDate,this.shareCompanies,this.shareSectors)
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
      else
      {
        this._dataService.getDataMonthAllP(this.startDate,this.endDate,this.shareCompanies,this.shareSectors)
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


  // Function to get Volume info for Monthly Grouping
  sendMonthVolume()
  {
    if(this.shareSectors.length==0)
    {
      this.toll=false;
      console.log(100);
      this._dataService.getDataMonthV(this.startDate,this.endDate,this.shareCompanies)
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
      this._dataService.getDataMonthSectV(this.startDate,this.endDate,this.shareSectors)
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

    else
    {
      this.toll=true;
      console.log(3000);
      if(this.selectedFri.give=="Only Companies")
      {
        this._dataService.getDataMonthOCompV(this.startDate,this.endDate,this.shareCompanies,this.shareSectors)
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
      else
      {
        this._dataService.getDataMonthAllV(this.startDate,this.endDate,this.shareCompanies,this.shareSectors)
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


  // Function to get Stock Price info for Weekly Grouping
  sendWeekPrice()
  {
    if(this.shareSectors.length==0)
    {
      this.toll=false;
      console.log(100);
      this._dataService.getDataWeekP(this.startDate,this.endDate,this.shareCompanies)
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
      this._dataService.getDataWeekSectP(this.startDate,this.endDate,this.shareSectors)
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

    else
    {
      this.toll=true;
      console.log(3000);
      if(this.selectedFri.give=="Only Companies")
      {
        this._dataService.getDataWeekOCompP(this.startDate,this.endDate,this.shareCompanies,this.shareSectors)
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
      else
      {
        this._dataService.getDataWeekAllP(this.startDate,this.endDate,this.shareCompanies,this.shareSectors)
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


  // Function to get Volume info for Weekly Grouping
  sendWeekVolume()
  {
    if(this.shareSectors.length==0)
    {
      this.toll=false;
      console.log(100);
      this._dataService.getDataWeekV(this.startDate,this.endDate,this.shareCompanies)
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
      this._dataService.getDataWeekSectV(this.startDate,this.endDate,this.shareSectors)
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

    else
    {
      this.toll=true;
      console.log(3000);
      if(this.selectedFri.give=="Only Companies")
      {
        this._dataService.getDataWeekOCompV(this.startDate,this.endDate,this.shareCompanies,this.shareSectors)
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
      else
      {
        this._dataService.getDataWeekAllV(this.startDate,this.endDate,this.shareCompanies,this.shareSectors)
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


  // Function to get Stock Price info for Daily Grouping
  sendDailyPrice()
  {
    if(this.shareSectors.length==0)
    {
      this.toll=false;
      console.log(100);
      this._dataService.getDataDailyP(this.startDate,this.endDate,this.shareCompanies)
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
      this._dataService.getDataDailySectP(this.startDate,this.endDate,this.shareSectors)
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

    else
    {
      this.toll=true;
      console.log(3000);
      if(this.selectedFri.give=="Only Companies")
      {
        this._dataService.getDataDailyOCompP(this.startDate,this.endDate,this.shareCompanies,this.shareSectors)
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
      else
      {
        this._dataService.getDataDailyAllP(this.startDate,this.endDate,this.shareCompanies,this.shareSectors)
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


  // Function to get Volume info for Daily Grouping
  sendDailyVolume()
  {
    if(this.shareSectors.length==0)
    {
      this.toll=false;
      console.log(100);
      this._dataService.getDataDailyV(this.startDate,this.endDate,this.shareCompanies)
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
      this._dataService.getDataDailySectV(this.startDate,this.endDate,this.shareSectors)
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
    
    else
    {
      this.toll=true;
      console.log(3000);
      if(this.selectedFri.give=="Only Companies")
      {
        this._dataService.getDataDailyOCompV(this.startDate,this.endDate,this.shareCompanies,this.shareSectors)
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
      else
      {
        this._dataService.getDataDailyAllV(this.startDate,this.endDate,this.shareCompanies,this.shareSectors)
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



  //Function to call the above defined functions as per User Input
  soft(event)
  {
    console.log("Soft");
    console.log(this.data2);
    if(this.house=="Pre Covid vs Post Covid")
    {
      this.atom=true;
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
      this.atom=false;
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
      this.atom=false;
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
      this.atom=false;
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


  //Check if Pre vs Post Covid Grouping can be selected for entered Date Range
  calcli(event)
  {
    this.checkCov();
  }


  checkCov()
  {
    this.dest=false;
    if(this.selectedDate.name=="Pre Covid vs Post Covid")
    {
      this.daycare= new Date(this.today.getTime() - (this.today.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
      this.sendDates();
      if(this.startDate!="2020-01-01" || this.endDate!=this.daycare)
      {
        this.dest=true;
      }
    }
  }


  //Function to get Date entered by User in the Calendar for Transition Date
  oneDate()
  {
    let Trans = this.date1;
    let TransD = new Date(Trans.getTime() - (Trans.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
    this.CovidDate = TransD;
    console.log(this.CovidDate);
  }


  //Function to Lock the User Entered Date Range for Filters, for Graph
  sendDates()
  {
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
  }

  //Function to Lock the User Entered Date Range for Filters, for Grid
  sendDatesGrid()
  {
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
        

  //Function to set data for Stock Price Variant
  setPrice()
  {
    this._dataService.editHola1(this.selectedCompanies);
    this._dataService.editHola2(this.selectedSectors);
    console.log(this.shareCompanies);
    console.log(this.shareSectors);
    this._dataService.editInterim1("Price");
  }

  //Function to set data for Volume Variant
  setVolume()
  {
    this._dataService.editHola1(this.selectedCompanies);
    this._dataService.editHola2(this.selectedSectors);
    console.log(this.shareCompanies);
    console.log(this.shareSectors);
    this._dataService.editInterim1("Volume");
  }


  constructor(private _dataService: DataservService, private _datastoreservice: DatastoreService) 
  {
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
      {label:'Companies and Sectors', value:{give: 'Companies and Sectors'}},
      {label:'Only Companies', value:{give: 'Only Companies'}}
    ];
    

    // Graph Styling Options
    this.options = {
      scales: {
        yAxes: [{
          ticks:{
            fontColor: 'white'
          },
          gridLines:{
            color:'white'
          }
        }],

        xAxes: [{
          ticks:{
            fontColor: 'white'
          },
          gridLines:{
            color:'white'
          }
        }]
      },

      legend: {
        labels:{
          fontColor: 'white'
        },
        position: 'right'
      },

      tooltips:{
        callbacks:{
          label: function(tooltipItem, data) 
          {
            var label = data.datasets[tooltipItem.datasetIndex].label;
            if (label){
              label += ': ';
            }
            label += data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
            return label;
          },
          afterLabel: function(tooltipItem, data) 
          {
            var devi = 'Deviation';
            if (devi){
              devi += ' : ';
            }
            devi += data.datasets[tooltipItem.datasetIndex].deviation[tooltipItem.index].toLocaleString();
            return devi;
          }
        }
      }
    };

    this.data2 = 
    {
      labels: [],
      datasets:[]
    }

    //Companies in the Company Multi-select Box
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

    //Secotrs in the Sector Multi-select Box
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
      {label: 'TECHNOLOGY', value: 'Technology'},
      {label: 'TRANSPORTATION', value: 'Transportation'}, 
    ];
  }


  ngOnInit(): void 
  {
    this._dataService.cast1.subscribe(decider=> this.decider=decider);
    this._dataService.ultra1.subscribe(shareCompanies=> this.shareCompanies=shareCompanies);
    this._dataService.ultra2.subscribe(shareSectors=> this.shareSectors=shareSectors);

    //Calendar Settings
    this.today = new Date();
    this.firstDate = new Date('01/01/2020');
    let TransDate = new Date('02/09/2020');
    this.rangeDates = [ this.firstDate, this.today];
    this.date1 = TransDate;
    let month = this.today.getMonth();
    let year = this.today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.selectedModel = {take: 'Stock Price'};
    this.selectedFri = {give: 'Companies and Sectors'};
  }
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