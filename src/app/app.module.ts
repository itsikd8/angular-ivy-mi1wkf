import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { DynamicTableService } from './services/dynamic-table.service';
import { EventListingComponent } from './components/event-listing/event-listing.component';
import { EventListingService } from './services/event-listing.service';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { EventListingCanDeactivateGuardService } from './components/event-listing/event-listing-deactivate.gurad';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTableComponent,
    EventListingComponent,
    InfiniteScrollComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    CommonModule
  ],
  providers: [DynamicTableService, EventListingService, EventListingCanDeactivateGuardService], // provide the service here to use it globally //
  bootstrap: [AppComponent]
})
export class AppModule { }
