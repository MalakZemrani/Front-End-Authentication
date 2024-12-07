import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  /**
   * Sets the JWT token in local storage.
   *
   * @param token - The JWT token to store in local storage.
   */
  set token(token: string) {
    localStorage.setItem('token', token);
  }

  /**
   * Retrieves the JWT token from local storage.
   *
   * @returns The stored JWT token, or `null` if no token is found.
   */
  get token() : string | null{
    return localStorage.getItem('token') as string;
  }

  /**
   * Removes the JWT token from local storage.
   * This is typically used for logging the user out.
   */
  clearToken(): void {
    localStorage.removeItem('token');
  }
}
