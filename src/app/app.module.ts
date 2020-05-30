import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FilterListComponent } from './filter-list/filter-list.component';
import { FilterSectorComponent } from './filter-sector/filter-sector.component';
import { InterService } from './Services/inter.service';


@NgModule({
  declarations: [
    AppComponent,
    FilterListComponent,
    FilterSectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ InterService ],
  bootstrap: [AppComponent, FilterListComponent]
})
export class AppModule { 

}

