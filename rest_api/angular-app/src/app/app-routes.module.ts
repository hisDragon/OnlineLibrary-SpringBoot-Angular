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
import { BookListComponent } from './book-list/book-list.component';
import { BorrowComponent } from './borrow/borrow.component';
import { UpdateDashboardComponent } from './update-dashboard/update-dashboard.component';


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },  // home component
    { path: 'login', component: LoginComponent }, // login component
    { path: 'register', component: RegisterComponent }, // register component
    { path: 'forgot-password', component: ForgotPasswordComponent }, // forgot password
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Dashboard
    { path: 'reset-password', component: ResetPasswordComponent, canActivate: [AuthGuard] }, // Reset Password Component
    { path: 'about', component: AboutComponent }, // about component
    { path: 'book-list' , component: BookListComponent }, // book listing
    { path: 'borrow', component: BorrowComponent, canActivate: [AuthGuard] }, // borrowing book
    { path: 'update-dashboard', component: UpdateDashboardComponent, canActivate: [AuthGuard] }, // update-dashboard 
    { path: '**', component: PathNotFoundComponent, pathMatch: 'full' }  // path not found
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutesModule{

}
