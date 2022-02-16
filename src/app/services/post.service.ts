import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  getPosts() {
   return this.http.get(this.url)
  }

  createPost(post: any) {
    return this.http.post(this.url, post).pipe(
      map((response) => response),
      catchError((error: Response) => {
        if (error.status == 400) {
          return throwError(() => new BadInput(error.json())); 
        }
        return throwError(() => new AppError(error.json()));
      })
    );
  }

  updatePost(p_id: BigInteger, edit: string) {
    return this.http.put(this.url + '/' + p_id, {id: p_id, title: edit})
  }

  deletePost(post: any) {
    return this.http.delete(this.url+ '/' + post.id).pipe(
      map((response) => response),
      catchError((error: Response) => {
        if (error.status == 404) {
          return throwError(() => new NotFoundError(error.json())); 
        }
        return throwError(() => new AppError(error.json()));
      })
    );
  }
}
