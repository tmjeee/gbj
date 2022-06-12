import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialLibraryModule } from "./angular-material/angular-material-library.module";

const modules = [
  CommonModule,
  AngularMaterialLibraryModule,
]

@NgModule({
  declarations: [

  ],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
})
export class UiLibModule {}
