import { NgModule } from '@angular/core';

// importing materials
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

// import and export modules as array
const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatSidenavModule,
  MatIconModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
