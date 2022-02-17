import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }
  logout() {
    this.service.logout(this.service.getLoginUser.email).subscribe(()=> {
      localStorage.removeItem('token')
    })
  }

}
