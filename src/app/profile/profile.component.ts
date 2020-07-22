import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: any = '';

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.profile = this.profileService.userProfile;

    if(this.profile === undefined || this.profile === null) {
      this.router.navigate(['/member']);
    }
  }

}
