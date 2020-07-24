import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  search: String;
  searchGen: String;
  searchAge: Number;
  searchHomeState: String;
  members: any;

  constructor(private apiService: ApiService, private profileService: ProfileService) { }

  ngOnInit() {
    this.apiService.get().subscribe((data) => {
      const { results } = data;

      this.members = results.sort((a,b) => {
        if(a.name.last<b.name.last) {
          return -1;
        } else if(a.name.last>b.name.last) {
         return 1;
        }
        if (a.name.first<b.name.first) {
          return -1;
        } else if (a.name.first>b.name.first) {
          return 1;
        } else {
          return 0;
        }
      });

    })
  }

  setMemberProfile(member: any) {
    this.profileService.userProfile = member;
  }

}
