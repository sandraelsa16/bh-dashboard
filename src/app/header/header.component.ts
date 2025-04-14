import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   name = sessionStorage.getItem('username')
  //  constructor(private router:Router)
   logout(){
    sessionStorage.clear()
    // this.router.navigateByUrl('')
   }
}
