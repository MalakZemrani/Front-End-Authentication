/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getRoles } from '../fn/user-api/get-roles';
import { GetRoles$Params } from '../fn/user-api/get-roles';
import { loginUser } from '../fn/user-api/login-user';
import { LoginUser$Params } from '../fn/user-api/login-user';
import { registerUser } from '../fn/user-api/register-user';
import { RegisterUser$Params } from '../fn/user-api/register-user';


/**
 * API for user management
 */
@Injectable({ providedIn: 'root' })
export class UserApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `registerUser()` */
  static readonly RegisterUserPath = '/api/v1/register';

  /**
   * Create a new user
   *
   * Registers a new user with a specified role.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerUser$Response(params: RegisterUser$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return registerUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new user
   *
   * Registers a new user with a specified role.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerUser(params: RegisterUser$Params, context?: HttpContext): Observable<{
}> {
    return this.registerUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `loginUser()` */
  static readonly LoginUserPath = '/api/v1/login';

  /**
   * User login
   *
   * Authenticates a user with their username and password.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loginUser$Response(params: LoginUser$Params, context?: HttpContext): Observable<StrictHttpResponse<{type: string, token: string
}>> {
    return loginUser(this.http, this.rootUrl, params, context);
  }

  /**
   * User login
   *
   * Authenticates a user with their username and password.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loginUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loginUser(params: LoginUser$Params, context?: HttpContext): Observable<{type: string, token: string
}> {
    return this.loginUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<{ type: string, token: string }>) => r.body)
    );
  }

  /** Path part for operation `getRoles()` */
  static readonly GetRolesPath = '/api/v1/roles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoles$Response(params?: GetRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return getRoles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoles(params?: GetRoles$Params, context?: HttpContext): Observable<Array<string>> {
    return this.getRoles$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

}
