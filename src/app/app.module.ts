import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {DataservService} from './dataserv.service';
import {ChartModule} from 'primeng/chart';
import { GridBaseComponent } from './grid-base/grid-base.component';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {CalendarModule} from 'primeng/calendar';
import {TabViewModule} from 'primeng/tabview';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { MastersComponent } from './masters/masters.component';

@NgModule({
  declarations: [
    AppComponent,
    GridBaseComponent,
    MastersComponent,
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
  providers: [ DataservService ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}