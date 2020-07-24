import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { MembersComponent } from './members/members.component';
import { ProfileComponent } from './profile/profile.component';
import { navComponent } from './nav/nav.component';
import { SearchGenPipe } from './search-gen.pipe';
import { SearchAgePipe } from './search-age.pipe';
import { SearchHomeStatePipe } from './search-home-state.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    MembersComponent,
    ProfileComponent,
    navComponent,
    SearchGenPipe,
    SearchAgePipe,
    SearchHomeStatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
