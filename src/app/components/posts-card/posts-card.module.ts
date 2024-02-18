import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsCardComponent } from "./posts-card.component";



@NgModule({
  declarations: [
      PostsCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      PostsCardComponent
  ]
})
export class PostsCardModule { }
