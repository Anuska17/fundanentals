import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventsM } from '../shared/events-m';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {
  @Input() event1!: EventsM;
  @Output() eventClick = new EventEmitter();

  handleClickMe(){
    this.eventClick.emit(this.event1.name)
  }
}
