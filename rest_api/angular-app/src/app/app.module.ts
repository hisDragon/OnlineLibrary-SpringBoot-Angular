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
import { BookService } from './services/book.service';

// routes module
import { AppRoutesModule } from './app-routes.module';

// components
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component'; // sub-components ▼
  import { CategoryComponent } from './inhome/category/category.component';
  import { RecommendedBooksComponent } from './inhome/recommended-books/recommended-books.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component'; // page/path not found

// @angular/materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './footer/footer.component';

// MDBBootstrapMaterials
import { MDBBootstrapModule } from 'angular-bootstrap-md';

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
    PathNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutesModule,
    BrowserAnimationsModule,
    MaterialModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    UserService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
