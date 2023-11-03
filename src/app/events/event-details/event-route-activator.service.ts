import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate{

  constructor(private sharedService: SharedService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const eventExits= !!this.sharedService.getEvent(+route.params['id'])

    if(!eventExits){
      this.router.navigate(['/404'])
    }
    return eventExits
  }

}
