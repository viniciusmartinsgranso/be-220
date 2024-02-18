import { Injectable } from '@angular/core';
import { PostProxy } from "../../models/proxies/post.proxy";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  public get(): PostProxy[] {
    const postTable = localStorage.getItem('posts');
    return postTable ? JSON.parse(postTable) : [];
  }

  public getOne(postId: number): [string, PostProxy | boolean] {
    const table = localStorage.getItem('posts');
    const storage: PostProxy[] = table ? JSON.parse(table) : [];

    if (!storage)
      return ['Parece que não existe nenhuma publicação criada!', false];

    const post = storage.find(post => post.id === postId);

    if (!post)
      return ['Essa publicação não existe!', false];

    return ['Melhore sua vida com essa publicação!', post];
  }

  public create(collectPoint: PostProxy): void {
    const table = localStorage.getItem('posts');
    const storage: PostProxy[] = table ? JSON.parse(table) : [];

    storage[storage.length - 1] === undefined ? collectPoint.id = 0 : collectPoint.id = storage[storage.length - 1].id + 1;

    storage.push(collectPoint);
    localStorage.setItem('posts', JSON.stringify(storage));
  }

  public delete(postId: number): void {
    const table = localStorage.getItem('posts');
    const storage: PostProxy[] = table ? JSON.parse(table) : [];

    const newList = storage.filter((post) => {
      if (post.id !== postId) {
        return post;
      } else return false;
    });

    storage.push(...newList);
    localStorage.setItem('posts', JSON.stringify(newList));
  }
}
