import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {TokenService} from '../token/token.service';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  /**
   * Constructor for RoleGuard.
   *
   * @param tokenService - Service for handling token storage and retrieval.
   * @param router - Router service to navigate to different routes.
   */
  constructor(private tokenService: TokenService, private router: Router) {
  }

  /**
   * Determines if the route can be activated based on the user's role and token.
   *
   * @param next - The activated route snapshot containing the route's data.
   * @returns `true` if the user has the appropriate role and a valid token, `false` otherwise.
   */
  canActivate(
    next: ActivatedRouteSnapshot,
  ): boolean {
    const token = this.tokenService.token;

    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userRole = decodedToken['role'];
      const allowedRoles = next.data['roles'] as string[];

      if (allowedRoles.includes(userRole)) {
        return true;
      } else {
        this.router.navigate(['/not-authorized']);
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

