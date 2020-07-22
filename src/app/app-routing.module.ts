import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'members', component: MembersComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', redirectTo: 'members', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
