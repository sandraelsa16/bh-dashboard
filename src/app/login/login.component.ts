import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  
  constructor(private router:Router){}

  login(username:string,password:string){
    if(username && password){
      sessionStorage.setItem("username",username)
      this.router.navigateByUrl('dashboard')
    }else{
      alert('Log in failed')
    }
  }
}
