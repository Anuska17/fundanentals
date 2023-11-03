import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{

  eventReceived: String =""
  events: any

  constructor(private sharedService: SharedService,private toastrService:ToastrService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.events=this.route.snapshot.data['events']
  }

  handleEventClicked(data:any){
    if (data!=null){
      this.eventReceived="Congratulations, Your Selected Event: "+data+" !!!"
    } 
  }

  handleClick(eventname: any){
    this.toastrService.info(eventname)
  }
}
