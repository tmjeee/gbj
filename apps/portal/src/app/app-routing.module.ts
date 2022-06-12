import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GeneralLayoutComponent } from "./layout/general-layout/general.layout";

const routes: Routes = [
  {path: '', component: GeneralLayoutComponent,},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', initialNavigation: 'enabledBlocking'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
