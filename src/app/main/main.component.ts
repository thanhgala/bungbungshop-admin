import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../core/services/authen.service';
import { UtilityService } from '../core/services/utility.service';
import { LoggedInUser } from '../core/domain/loggedin.user';
import { SystemConstants } from '../core/common/system.constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public user:LoggedInUser;
  constructor(private authenService:AuthenService,private utilityService:UtilityService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
  }

  logout(){
    this.authenService.logout();
    this.utilityService.navigateToLogin();
  }

}
