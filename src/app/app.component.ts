import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get().subscribe((data) => {
      const { results } = data;

      this.members = results.sort((a,b) => {
        if(a.name.last<b.name.last) {
          return -1;
        }
        if(a.name.last>b.name.last) {
          return 1;
        }
        return 0;
      });

    })
  }

  search: String;

  members: any;

  // people = [
  //   {
  //   'firstName': 'Bruce',
  //   'lastName': 'Wayne',
  //   'age': 33
  //   },
  //   {
  //   'firstName': 'Clark',
  //   'lastName': 'Kent',
  //   'age': 33
  //   }
  // ]

  setMemberProfile() {}
}
