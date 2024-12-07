import { Component } from '@angular/core';
import {TokenService} from '../../../services/token/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  standalone: true,
  styleUrl: './seller.component.css'
})
export class SellerComponent {

  /**
   * Creates an instance of SellerComponent.
   * @param tokenService - Service to manage the JWT token for the seller.
   * @param router - Angular Router to handle navigation between pages.
   */
  constructor(private tokenService: TokenService, private router: Router) {}

  /**
   * Logs out the user by clearing the stored token and redirects to the login page.
   */
  logout(): void {
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }

}
