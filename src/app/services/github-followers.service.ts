import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService {
  private url = 'https://api.github.com/users/mosh-hamedani/followers'
  constructor(private http: HttpClient) {
   }
   getFollowers() {
    return this.http.get(this.url)
   }
}
