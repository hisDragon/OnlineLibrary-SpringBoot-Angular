import { NgModule } from '@angular/core';

// importing materials
import { MatButtonModule } from '@angular/material/button';

// import and export modules as array
const MaterialComponents = [
  MatButtonModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
