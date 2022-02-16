import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private service: GithubFollowersService) { }
  followers: any = []
  ngOnInit(): void {
    this.service.getFollowers().subscribe((res) => {
      this.followers = res
    })
  }

}
