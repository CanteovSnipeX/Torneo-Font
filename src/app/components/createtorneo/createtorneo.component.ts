import { Component, OnInit } from '@angular/core';
import { Torneo } from 'src/app/models/torneo';
import { RestTorneoService } from 'src/app/services/restTorneo/rest-torneo.service';
import { fadeIn } from 'src/app/transitions/transitions';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';


@Component({
  selector: 'app-createtorneo',
  templateUrl: './createtorneo.component.html',
  styleUrls: ['./createtorneo.component.css'],
  animations:[fadeIn]
})
export class CreatetorneoComponent implements OnInit {
  torneo:Torneo;
  public token;
  public user;

  constructor(private restTorneo:RestTorneoService, private restUser:RestUserService ) { 
    this.torneo = new Torneo('','','','',[]);

  }

  ngOnInit(): void {
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
  }


  onSubmit(form){
    this.restTorneo.saveTorneo(this.user._id , this.torneo).subscribe((res:any)=>{
      if(res.torneoPush){
        alert(res.message)
        form.reset();
        delete res.torneoPush.password;
        this.user = res.torneoPush ;
        localStorage.setItem('user', JSON.stringify(this.user));
      }else{
        alert(res.message);
      }
    },
    error=> alert(error.error.message))
  }
}
