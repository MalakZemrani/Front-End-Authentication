import {Component, OnInit} from '@angular/core';
import {TokenService} from '../../services/token/token.service';
import {Router} from '@angular/router';
import {jwtDecode} from "jwt-decode";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  standalone: true
})
export class WelcomeComponent implements OnInit {

  /**
   * Creates an instance of WelcomeComponent.
   * @param tokenService - Service to manage the JWT token.
   * @param router - Angular Router to navigate between views.
   */
  constructor(private tokenService: TokenService, private router: Router) {}

  /**
   * Lifecycle hook called when the component is initialized.
   * Decodes the JWT token and redirects the user based on their role (Buyer, Seller or Unauthorized).
   */
  ngOnInit(): void {
    const token = this.tokenService.token;

    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userRole = decodedToken['role'];

      if (userRole === 'BUYER') {
        this.router.navigate(['/buyer/welcome']);
      } else if (userRole === 'SELLER') {
        this.router.navigate(['/seller/welcome']);
      } else {
        this.router.navigate(['/not-authorized']);
      }
    } else {
      this.logout();
    }
  }

  /**
   * Clears the JWT token and redirects the user to the login page.
   */
  logout(): void {
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }
}
