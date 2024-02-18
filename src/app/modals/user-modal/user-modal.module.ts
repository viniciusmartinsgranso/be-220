import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModalComponent } from "./user-modal.component";
import { ClickOutsideModule } from "../../directives/click-outside.module";



@NgModule({
  declarations: [
      UserModalComponent
  ],
  imports: [
    CommonModule,
    ClickOutsideModule
  ],
  exports: [
    UserModalComponent
  ]
})
export class UserModalModule { }
