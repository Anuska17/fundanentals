import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  eventReceived: String ="";
  event={
    id : 1,
    name : 'Angular Component',
    date : '9/26/2036',
    time : '10:00 am',
    price : 599.99,
    location : {
      address: '1st Phase, BTM Layout,',
      city: 'Bangalore,',
      country: 'India'
    }
  }

  handleEventClicked(data:any){
    this.eventReceived=data
  }
}
