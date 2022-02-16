import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'git-hub-profile',
  templateUrl: './git-hub-profile.component.html',
  styleUrls: ['./git-hub-profile.component.css']
})
export class GitHubProfileComponent implements OnInit {

  constructor(private router: Router, private route:  ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(params.get('id'))
    })
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: {
        page: 1, order: 'new'
      }
    })
  }

}
