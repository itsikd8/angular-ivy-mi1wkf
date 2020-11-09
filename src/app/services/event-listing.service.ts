import { Injectable } from '@angular/core';
import { EventListing } from '../models/event-listing.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventListingService {
  eventsData: EventListing;
  events: EventListing[];

  private url: any = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  postEvent(eventsData: EventListing) {
    return this.http.post(this.url + '/events', eventsData);
  }

  getEvents() {
    return this.http.get(this.url + '/events');
  }

  putEvents(eventsData: EventListing) {
    return this.http.put(this.url + '/events' + `${eventsData._id}`, eventsData);
  }

  deleteEventDetail(_id: any) {
    return this.http.delete(this.url + '/events' + `/${_id}`);
  }

}
