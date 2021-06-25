import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/transitions/transitions';
import { User } from 'src/app/models/user';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeIn]
})
export class LoginComponent implements OnInit {
  public user:User;
  token:string;
  userLogged;

  constructor( private restUser:RestUserService, private router:Router ) { 
    this.user = new User('','','','','','','','',[])
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.restUser.login(this.user, 'true').subscribe((res:any)=>{
      if(!res.token){
        alert(res.message)
      }else{
        this.userLogged = res.user;
        this.token = res.token;
        delete this.userLogged.password;
        if(this.token.length <= 0){
          alert('El token no se generó o capturó de manera correcta');
        }else{
          localStorage.setItem('token', this.token);
          localStorage.setItem('user', JSON.stringify(this.userLogged));
          alert('Usuario logeado ');
          this.router.navigateByUrl('home');
        }
      }
    },
    (error:any) => alert(error.error.message)
    )
  }

}
