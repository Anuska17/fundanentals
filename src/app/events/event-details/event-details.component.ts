import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit{

  event:any
  constructor(private sharedService: SharedService, private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.event=this.sharedService.getEvent(+this.route.snapshot.params['id'])
  }
}
