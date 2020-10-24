// necessary modules and components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// http module for communicating with spring boot api in the backend
import { HttpClientModule } from '@angular/common/http';

// forms for form dropdowns
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// guards and services
import { UserService } from './services/user.service';
import { BookService } from './services/book.service';
import { AuthGuard } from './services/auth-guard.guard';

// routes module
import { AppRoutesModule } from './app-routes.module';

// components
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component'; // sub-components ▼
  import { CategoryComponent } from './inhome/category/category.component';
  import { RecommendedBooksComponent } from './inhome/recommended-books/recommended-books.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// auth ▼
  import { LoginComponent } from './auth/login/login.component';
  import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './about/about.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component'; // page/path not found

// @angular/materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './footer/footer.component';

// MDBBootstrapMaterials
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { AddBookComponent } from './dashboard/user-specific/add-book/add-book.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

// File Upload Module ng2-file-upload
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    RecommendedBooksComponent,
    AboutComponent,
    CategoryComponent,
    FooterComponent,
    PathNotFoundComponent,
    DashboardComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AddBookComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutesModule,
    BrowserAnimationsModule,
    MaterialModule,
    FileUploadModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    UserService,
    BookService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
