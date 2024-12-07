import {Component} from '@angular/core';
import {TokenService} from '../../../services/token/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  standalone: true,
  styleUrl: './buyer.component.css'
})
export class BuyerComponent {

  /**
   * Creates an instance of BuyerComponent.
   * @param tokenService - Service to manage the JWT token for the buyer.
   * @param router - Angular Router to handle navigation between pages.
   */
  constructor(private tokenService: TokenService, private router: Router) {
  }

  /**
   * Logs out the user by clearing the stored token and redirects to the login page.
   */
  logout(): void {
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }
}
