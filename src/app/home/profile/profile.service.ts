import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorizationService } from 'src/app/landing/authorization/authorization.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient,private authService:AuthorizationService) {}

  public getClueProgressData() {
    const teamId = this.authService.getTeamId();
    return this.httpClient.get(
      `${environment.url}/api/progress/${teamId}/all`
    );
  }

}
