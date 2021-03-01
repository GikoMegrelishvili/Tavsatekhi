import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private httpClient: HttpClient) {}

  public login(captainEmail: string, password: string) {
    const body = {
      captainEmail,
      password,
    };
    return this.httpClient.post(`${environment.url}/api/auth/user/login`, body);
  }
  public accessToken(){
    const refreshToken = this.getRefreshToken();
    const teamId = this.getTeamId();
    return this.httpClient.post(`${environment.url}/api/auth/user/${teamId}/token`,refreshToken);
  };

  public setTeamId(teamId){
    localStorage.setItem("TEAM_ID",teamId);
  }
  public setAccessToken(token){
    localStorage.setItem("ACCESS_TOKEN",token);
  }
  public setRefreshToken(token){
    localStorage.setItem("REFRESH_TOKEN",token);
  }
  public getTeamId(){
    return localStorage.getItem("TEAM_ID");
  }
  public getAcessToken(){
    return localStorage.getItem("ACCESS_TOKEN");
  }
  public getRefreshToken(){
    return localStorage.getItem("REFRESH_TOKEN");
  }
}
