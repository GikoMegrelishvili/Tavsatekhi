import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { AuthorizationService } from "../landing/authorization/authorization.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private router: Router,private authService:AuthorizationService) {}

  tokenExists(): boolean {
    let tokenExists: boolean;
    if (this.authService.getRefreshToken()) {
      tokenExists = true;
    } else {
      this.router.navigate(["/landing/auth"]);
      tokenExists = false;
    }
    return tokenExists;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.tokenExists();
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.tokenExists();
  }
}
