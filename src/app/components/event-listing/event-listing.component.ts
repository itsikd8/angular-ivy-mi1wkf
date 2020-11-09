import { Component, OnInit, ViewChild } from '@angular/core';
import { EventListingService } from 'src/app/services/event-listing.service';
import { NgForm } from '@angular/forms';
import { EventListing } from 'src/app/models/event-listing.model';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.scss']
})
export class EventListingComponent implements OnInit {

  @ViewChild('eventForm') public eventListingForm: NgForm;

  constructor(private service: EventListingService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshEvents();
  }
  onSubmit(eventForm: NgForm) {
    if (eventForm.value._id) {
      this.updateData(eventForm);
    }
    this.insertData(eventForm);
  }


  insertData(eventForm: NgForm) {
    this.service.postEvent(eventForm.value).subscribe(res => {
      this.resetForm(eventForm);
    });
  }

  updateData(eventForm: NgForm) {
    this.service.putEvents(eventForm.value).subscribe(res => {
      this.resetForm(eventForm);
      console.log("EVENT UPDATED");
    })
  }

  refreshEvents() {
    this.service.getEvents().subscribe((res) => {
      this.service.events = res as EventListing[];
    });
  }

  resetForm(eventForm?: NgForm) {
    if (eventForm != null) {
      eventForm.resetForm();
    }
    this.service.eventsData = {
      _id: null,
      eventName: null,
      longDes: null,
      eventDate: null,
      venueName: null,
      mobNumber: null,
      pincode: null,
      address: null
    };
    this.refreshEvents();
  }

  onEdit(event: EventListing) {
    this.service.eventsData = event;
    console.log('CLICKED');
  }

  onDelete(_id: number, eventForm: NgForm) {
    if (confirm('Are you sure?') === true) {
      this.service.deleteEventDetail(_id).subscribe((res) => {
        this.refreshEvents();
        this.resetForm(eventForm);
      })
    }
  }

}
