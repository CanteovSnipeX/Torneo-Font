import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token:String;
  username:string;

  constructor( private router:Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.username = localStorage.getItem('username')
  }


  deleteData(){
    localStorage.removeItem('username');
  }

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('home');
  }

}
