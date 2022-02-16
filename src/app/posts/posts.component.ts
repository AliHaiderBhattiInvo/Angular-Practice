import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any = [];
  p_id: any = null;
  edit: any = null;
  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      (res) => {
        this.posts = res;
      },
      (error) => {
        console.log(error);
        alert('An unexpected error occurred!');
      }
    );
  }
  createPost(title: HTMLInputElement) {
    let post = { title: title.value };
    this.service.createPost(post).subscribe(
      (res) => {
        this.posts.unshift(res);
        title.value = '';
      },
      (error: Response) => {
        if (error.status === 400) alert('Bad input!');
        else
         throw error
      }
    );
  }

  editPost(post: any) {
    this.p_id = post.id;
    this.edit = post.title;
  }

  updatePost() {
    let index = this.posts.findIndex((item: any) => {
      return item.id == this.p_id;
    });
    this.service.updatePost(this.p_id, this.edit).subscribe(
      () => {
        Object.assign(this.posts[index], { id: this.p_id, title: this.edit });
        this.p_id = null;
      },
      (error) => {
        console.log(error);
        alert('An unexpected error occurred!');
      }
    );
  }

  deletePost(post: any) {
    this.service.deletePost(post).subscribe(
      () => {
        this.posts = this.posts.filter((item: any) => {
          return item.id != post.id;
        });
      },
      (error: Response) => {
        if (error.status === 404) alert('This post has already been deleted!');
        else
         throw error
      }
    );
  }
}
