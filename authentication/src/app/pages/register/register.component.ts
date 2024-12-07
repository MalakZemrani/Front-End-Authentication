import {Component, OnInit} from '@angular/core';
import {RegisterUserRequest} from '../../services/models/register-user-request';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {UserApiService} from '../../services/services/user-api.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [
    FormsModule,
    CommonModule,
  ],
  standalone: true,
  styleUrl: './register.component.css'
})


export class RegisterComponent implements OnInit {

  authRequest: RegisterUserRequest = {
    username: '',
    password: '',
    role: 'BUYER' // Default role is 'BUYER'
  };

  roles: Array<string> = [];
  errorMsg: Array<string> = [];

  /**
   * Creates an instance of the RegisterComponent.
   * @param router - Angular Router to navigate between views
   * @param userApiService - Service to interact with the backend API for user operations
   */
  constructor(
    private router: Router,
    private userApiService: UserApiService,
  ) {
  }

  /**
   * Lifecycle hook called when the component is initialized.
   * Loads the available roles from the backend.
   */
  ngOnInit(): void {
    this.loadRoles();
  }

  /**
   * Fetches the available roles from the backend service.
   * This method updates the 'roles' array with the fetched data.
   */
  loadRoles(): void {
    this.userApiService.getRoles().subscribe({
      next: (roles) => {
        this.roles = roles;
      },
      error: (err) => {
        console.error('Error fetching roles', err);
      }
    });
  }

  /**
   * Registers the user by calling the registration API.
   * After successful registration, it redirects to the login page.
   */
  register() {

    this.errorMsg = [];
    this.userApiService.registerUser({
      body: this.authRequest
    }).subscribe({
      next: () => {
        this.router.navigate(['login']);
      },
      error: (err) => {
        if (err.error?.errorMsg) {
          this.errorMsg = [err.error.errorMsg];
        } else {
          this.errorMsg = ['An unknown error has occurred'];
        }
      }
    });
  }

  /**
   * Navigates the user to the login page.
   */
  login() {
    this.router.navigate(['login']);
  }
}
