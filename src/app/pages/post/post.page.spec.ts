import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostPage } from './post.page';

describe('PostsPage', () => {
  let component: PostPage;
  let fixture: ComponentFixture<PostPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
