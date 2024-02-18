import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar.component";
import { ClickOutsideModule } from "../../directives/click-outside.module";
import { UserModalModule } from "../../modals/user-modal/user-modal.module";



@NgModule({
  declarations: [
      NavbarComponent
  ],
    imports: [
        CommonModule,
        ClickOutsideModule,
        UserModalModule
    ],
  exports: [
      NavbarComponent
  ]
})
export class NavbarModule { }
