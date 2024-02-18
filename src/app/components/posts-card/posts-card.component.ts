import { Component, Input, OnInit } from '@angular/core';
import { PostProxy } from "../../models/proxies/post.proxy";

@Component({
  selector: 'app-post-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.scss'],
})
export class PostsCardComponent  implements OnInit {

  constructor() { }

  @Input({ required: true })
  public post!: PostProxy;

  ngOnInit() {}

}
