import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {UserApiService} from '../../services/services/user-api.service';
import {TokenService} from '../../services/token/token.service';
import {LoginUserRequest} from '../../services/models/login-user-request';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [
    FormsModule,
    CommonModule
  ],
  standalone: true,
})

export class LoginComponent {

  loginUserRequest: LoginUserRequest = {password: '', username: ''}
  errorMsg: Array<string> = [];

  /**
   * Constructor for the LoginComponent.
   * @param router Handles navigation between routes.
   * @param userApiService Handles API calls related to user authentication.
   * @param tokenService Manages storage and retrieval of the authentication token.
   */
  constructor(
    private router: Router,
    private userApiService: UserApiService,
    private tokenService: TokenService
  ) {
  }

  /**
   * Initiates the login process by sending the user's credentials to the API.
   * Upon success, the user is navigated to the welcome page.
   * If there's an error, it is displayed to the user.
   */
  login() {
    this.errorMsg = [];
    this.userApiService.loginUser({
      body: this.loginUserRequest
    }).subscribe({
      next: (response) => {
        if (response && response.token) {
          this.tokenService.token = response.token as string
          this.router.navigate(['welcome']);
        }
      },
      error: (err) => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.errorMsg);
        }

      }
    })
  }

  /**
   * Navigates the user to the registration page.
   */
  register() {
    this.router.navigate(['register'])
  }

}
