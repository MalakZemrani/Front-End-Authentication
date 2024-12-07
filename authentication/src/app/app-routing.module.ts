import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {RoleGuard} from './services/guards/role.guard';
import {NotAuthorizedComponent} from './pages/not-authorized/not-authorized.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';

/**
 * Defines the routes for the application.
 * Routes include paths for login, register, different role-based welcome pages,
 * and the not-authorized page for restricted access.
 *
 * The `RoleGuard` is used for protecting certain routes based on user roles,
 * allowing access only to users with the appropriate roles.
 */
export const routes: Routes = [
  /**
   * Route for the login page.
   */
  {
    path: 'login',
    component: LoginComponent
  },

  /**
   * Route for the register page where users can create an account.
   */
  {
    path: 'register',
    component: RegisterComponent
  },

  /**
   * Route for the welcome page, accessible by both BUYER and SELLER roles.
   * Protected by RoleGuard.
   */
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [RoleGuard],
    data: { roles: ['BUYER', 'SELLER'] }
  },

  /**
   * Route for the buyer's specific welcome page.
   * Accessible only by the BUYER role. Protected by RoleGuard.
   */
  {
    path: 'buyer/welcome',
    loadComponent: () => import('./pages/welcome/buyer/buyer.component').then(m => m.BuyerComponent),
    canActivate: [RoleGuard],
    data: { roles: ['BUYER'] }
  },

  /**
   * Route for the seller's specific welcome page.
   * Accessible only by the SELLER role. Protected by RoleGuard.
   */
  {
    path: 'seller/welcome',
    loadComponent: () => import('./pages/welcome/seller/seller.component').then(m => m.SellerComponent),
    canActivate: [RoleGuard],
    data: { roles: ['SELLER'] }
  },

  /**
   * Route for the not-authorized page, shown when a user attempts to access a restricted area.
   */
  {
    path: 'not-authorized',
    component: NotAuthorizedComponent
  },

  /**
   * Redirects to the login page when no matching route is found.
   */
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

/**
 * The AppRoutingModule configures and exports the routing for the application.
 * It includes lazy loading for certain components (Buyer and Seller welcome pages).
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
