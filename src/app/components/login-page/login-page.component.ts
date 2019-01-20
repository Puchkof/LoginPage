import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  loginsDropdown: string = "logins";
  passwordsDropdown: string = "passwords";
  login: string = null;
  password: string = null;
  isSignedIn: boolean = false;

  receiveLogin($event){
    this.login = $event;
  }

  receivePassword($event){
    this.password = $event;
  }

  sendValues(){
    let self = this;
    this.httpClient.post("/api", 
    {
      "login": this.login, 
      "password": this.password
    })
    .subscribe(res => {

    },
    err =>{
      self.isSignedIn = true;
    })
  }

  constructor(private httpClient: HttpClient) {
 
  }

  ngOnInit() {
  }

}
