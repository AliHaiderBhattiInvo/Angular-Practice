import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../services/github-followers.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: GithubFollowersService) { }
  followers: any = []
  ngOnInit(): void {
    combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe((combine) => {
      let id = combine[0].get('id');
      let page = combine[1].get('page')
      this.service.getFollowers().subscribe((res) => {
        this.followers = res
      })
    })
    // this.route.paramMap.subscribe(() => {
    // })
    // this.route.queryParamMap.subscribe(() => {
    // })
  }

}
