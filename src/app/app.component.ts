import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search: String;
  searchGen: String;
  searchAge: Number;
  searchHomeState: String;
  members: any;

  constructor() {}

}
