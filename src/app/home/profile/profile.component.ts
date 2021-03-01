import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private translateService: TranslateService,private profileService:ProfileService) {}
  private prepareTeamInfo(): void {}

  ngOnInit(): void {
    this.prepareTeamInfo();
    this.profileService.getClueProgressData().subscribe((res:any)=>{
      console.log(res);
    },(err:any)=>{
      console.log(err);
    });
  }
}

const teamInfo = [
  {
    title: 'PROFILE.TEAM_NAME',
    value: null,
  },
  {
    title: 'PROFILE.TIME_ELAPSED',
    value: null,
  },
  {
    title: 'PROFILE.RIDDLE_GUESSED',
    value: null,
  },
  {
    title: 'PROFILE.RIDDLE_ONGOING',
    value: null,
  },
];
