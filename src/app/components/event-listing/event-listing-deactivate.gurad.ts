import { CanDeactivate } from '@angular/router';
import { EventListingComponent } from './event-listing.component';
import { Injectable } from '@angular/core';

@Injectable()
export class EventListingCanDeactivateGuardService implements CanDeactivate<EventListingComponent> {
    canDeactivate(component: EventListingComponent): boolean {
        if (component.eventListingForm.dirty) {
            return confirm("Warning: Do you want to discard all the changes?");
        }
        return true;
    }
}
