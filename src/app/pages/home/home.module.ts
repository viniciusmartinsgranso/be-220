import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HomeCardModule } from "../../components/home-card/home-card.module";
import { PostsCardModule } from "../../components/posts-card/posts-card.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        HomeCardModule,
        PostsCardModule
    ],
  declarations: [HomePage]
})
export class HomePageModule {}
