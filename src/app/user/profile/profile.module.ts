import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { Router, RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [
  { path: 'profile', component: ProfileComponent}
]

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class ProfileModule { }
