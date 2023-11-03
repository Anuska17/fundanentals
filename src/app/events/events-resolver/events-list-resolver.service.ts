import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any>{

  constructor(private sharedService: SharedService) {}

  resolve() {
    return this.sharedService.getEvents().pipe(map((events: any) => events))
  }
}
