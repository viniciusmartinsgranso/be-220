import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PostProxy } from "../../models/proxies/post.proxy";
import { PostService } from "../../services/post/post.service";
import { HelperService } from "../../services/helper/helper.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor(
      private readonly activatedRoute: ActivatedRoute,
      private readonly postService: PostService,
      private readonly toastService: HelperService,
      private readonly router: Router,
  ) {
    this.id = +this.activatedRoute.snapshot.params['id'];
  }

  public id: number = 0;

  public post!: PostProxy;

  public async ngOnInit(): Promise<void> {
    await this.verifyPost();
  }

  public async verifyPost(): Promise<void> {
    const [ message, hasPost ] = this.postService.getOne(this.id);

    await this.toastService.showToast(message);

    if (typeof hasPost === "boolean")
      return void this.router.navigateByUrl('/home');

    this.post = hasPost;
  }

  public async backHome(): Promise<void> {
    await this.router.navigateByUrl('home')
  }

}
