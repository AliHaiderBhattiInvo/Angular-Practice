import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = 'http://localhost:4000/api/'
  loginuser: any = '';
  error: any = ''
  status: number = 0
  get getLoginUser(): any {
    return this.loginuser
  }
  constructor(private http: HttpClient) { }
  login(credentials : any) {
    return this.http.post(this.url + 'login', credentials).pipe(
      map((result: any) => {
        if(result.status == 200) {
          this.loginuser = result.user
          this.status = result.status
        }
        else {
          // this.error = result
          this.status = result.status
        }
        
      })
    )
    
  }

  logout(email: string) {
    return this.http.post(this.url + 'logout', {email})
  }
}


