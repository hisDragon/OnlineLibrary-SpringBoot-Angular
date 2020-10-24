import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { AuthGuard } from './services/auth-guard.guard';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },  // home component
    { path: 'login', component: LoginComponent }, // login component
    { path: 'register', component: RegisterComponent }, // register component
    { path: 'forgot-password', component: ForgotPasswordComponent }, // forgot password
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Dashboard
    { path: 'reset-password', component: ResetPasswordComponent }, // Reset Password Component
    { path: 'about', component: AboutComponent }, // about component
    { path: '**', component: PathNotFoundComponent, pathMatch: 'full' },  // path not found
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutesModule{

}
