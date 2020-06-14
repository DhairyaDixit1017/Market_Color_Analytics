import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FilterSectorComponent } from './filter-sector/filter-sector.component';
import { InterService } from './Services/inter.service';
import {DataservService} from './dataserv.service';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import {ChartModule} from 'primeng/chart';
import { GridBaseComponent } from './grid-base/grid-base.component';
import {TableModule} from 'primeng/table';
import { SectorDropComponent } from './sector-drop/sector-drop.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { CompanyDropComponent } from './company-drop/company-drop.component';
import { CalComponent } from './cal/cal.component';
import {CalendarModule} from 'primeng/calendar';
import {TabViewModule} from 'primeng/tabview';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { GraphDirDirective } from './HelpingDir/graph-dir.directive';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    AppComponent,
    FilterSectorComponent,
    BarGraphComponent,
    GridBaseComponent,
    SectorDropComponent,
    CompanyDropComponent,
    CalComponent,
    LineGraphComponent,
    GraphDirDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartModule,
    TableModule,
    MultiSelectModule,
    CalendarModule,
    TabViewModule,
    GridModule, PagerModule
  ],
  providers: [ InterService, DataservService ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}