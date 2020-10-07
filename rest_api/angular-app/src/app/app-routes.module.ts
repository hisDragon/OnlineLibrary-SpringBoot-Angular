import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },  // home component
    { path: 'about', component: AboutComponent } // about component
    // { path: '**', component: PathNotFoundComponent }  // path not found
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutesModule{

}
