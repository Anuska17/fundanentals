import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/event-lists/events.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { SharedService } from './events/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorsComponent } from './errors/errors.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventsListResolverService } from './events/events-resolver/events-list-resolver.service';
import { ProfileModule } from './user/profile/profile.module';

const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  { path: 'events', component: EventsComponent , resolve: {events:EventsListResolverService }},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
  { path: '404', component: ErrorsComponent},
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { 
    path: 'user', 
    loadChildren: () => import('./user/profile/profile.module').then(m => m.ProfileModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ProfileModule
  ],
  providers: [
    SharedService, 
    ToastrService, 
    EventRouteActivatorService,
    EventsListResolverService,
    {
      provide:'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirtyProperty){
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }
  else{
    return true
  }
}
