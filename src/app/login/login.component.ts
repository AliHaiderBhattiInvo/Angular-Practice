import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inValidLogin: boolean = false
  email: string = ''
  password : string = ''
  constructor(private router: Router, private service: AuthService) { }

  ngOnInit(): void {
  }

  signIn(credentials: any) {
    this.service.login(credentials).subscribe(() => {
      if(this.service.status == 200) {
          localStorage.setItem('token', JSON.stringify(this.service.getLoginUser.token))
        this.router.navigate(['/'])
      }
      // if(this.service.loginUser && this.service.loginUser != "Invalid credentials!") {
      //   localStorage.setItem('token', JSON.stringify(this.service.loginUser.user.token))
      //   this.router.navigate(['/'])
      // } 
      else this.inValidLogin = true
    })
  }

}
