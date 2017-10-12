import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { SystemConstants } from '../common/system.constants';
import 'rxjs/add/operator/map';
import { LoggedInUser } from '../domain/loggedin.user';
@Injectable()
export class AuthenService {

  constructor(private _htpp: Http) { }

  login(username: string, password: string) {
    let body = "userName=" + encodeURIComponent(username) +
      "&password=" + encodeURIComponent(password) +
      "&grant_type=password";

    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options = new RequestOptions({ headers: headers });

    return this._htpp.post(SystemConstants.BASE_API + '/api/oauth/token', body, options).map((response: Response) => {
      var user: LoggedInUser = response.json();
      if (user && user.access_token) {
        localStorage.removeItem(SystemConstants.CURRENT_USER);
        localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(user));
      }
    });
  }

  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
  }

  isUserAuthenticate(): boolean {
    let user = localStorage.getItem(SystemConstants.CURRENT_USER);
    if(user!=null){
      return true;
    }
    else
      return false;
  }

  getLoggedInUser(): any {
    let user: LoggedInUser;
    if(this.isUserAuthenticate()){
      var userData = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
      user = new LoggedInUser(userData.access_token,userData.username,userData.fullName,userData.email,userData.avarta);
    }
    else{
      user = null;
    }
    return user;
  }
}
