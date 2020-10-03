// necessary modules and components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// http module for communicating with spring boot api in the backend
import { HttpClientModule } from '@angular/common/http';

// forms for form dropdowns
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// services
import { UserService } from './services/user.service';

// routes
import { AppRoutesModule } from './app-routes.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecommendedBooksComponent } from './inhome/recommended-books/recommended-books.component';

// @angular/materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    RecommendedBooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutesModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
