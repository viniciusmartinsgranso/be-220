import { Component, OnInit } from '@angular/core';
import { HomeCardInterface } from "../../models/interfaces/home-card-interface";
import { PostProxy } from "../../models/proxies/post.proxy";
import { Router } from "@angular/router";
import { PostService } from "../../services/post/post.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
      private readonly router: Router,
      private readonly postService: PostService,
  ) {}

  public personalCard: HomeCardInterface[] = [
    {
      title: 'YOGA EXPRESS',
      description: '',
      image: 'assets/images/gym-option.png',
    },
    {
      title: 'YOGA EXPRESS',
      description: '',
      image: 'assets/images/gym-option.png',
    },
    {
      title: 'YOGA EXPRESS',
      description: '',
      image: 'assets/images/gym-option.png',
    },
  ];

  public programsCard: HomeCardInterface[] = [
    {
      title: 'LEVANTAMENTO DE PESO',
      description: 'Continuar treinando',
      image: 'assets/images/gym-option.png',
    },
    {
      title: 'YOGA EXPRESS',
      description: '',
      image: 'assets/images/gym-option.png',
    },
    {
      title: 'YOGA EXPRESS',
      description: '',
      image: 'assets/images/gym-option.png',
    },
  ];

  public posts: PostProxy[] = [];

  public ngOnInit(): void {
    this.posts = this.postService.get();
    console.log(this.posts);
  }

  public trackBy(index: number) {
    return index;
  }

  public async goToPost(id: number): Promise<void> {
    await this.router.navigateByUrl(`/post/${ id }`);
  }

}
