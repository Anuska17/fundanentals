import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html'
})
export class CreateEventComponent {

  isDirtyProperty:boolean = false;
  constructor(private router: Router){}

  cancel(){
    this.router.navigate(['/events'])
  }
}
