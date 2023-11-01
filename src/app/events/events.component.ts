import { Component, OnInit} from '@angular/core';
import { SharedService } from './shared/shared.service';

declare let toastr: any

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{

  eventReceived: String =""
  events: any[] = [];

  constructor(private sharedService: SharedService){
  }

  ngOnInit(){
    this.events=this.sharedService.getEvents()
  }

  handleEventClicked(data:any){
    if (data!=null){
      this.eventReceived="Congratulations, Your Selected Event: "+data+" !!!"
    } 
  }

  handleClick(eventname: any){
    toastr.info(eventname);
  }
  
}
