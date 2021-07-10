import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/transitions/transitions';
import { Equipo } from 'src/app/models/equipo';
import { RestTeamService } from 'src/app/services/restTeam/rest-team.service';
import { RestGroupService } from 'src/app/services/restGroup/rest-group.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-createteam',
  templateUrl: './createteam.component.html',
  styleUrls: ['./createteam.component.css'],
  animations:[fadeIn]
})
export class CreateteamComponent implements OnInit {

  Grupos:[] = [];
  Equipo:[];
  equipo:Equipo;
  public grupo;
  public token;
  public user;
  grupoId:string;


  constructor( private restTeam:RestTeamService, private restGrupo:RestGroupService, private restUser:RestUserService) {
    this.equipo = new Equipo('','','','');
   }

  ngOnInit(): void {
    this.restGrupo.getGroup().subscribe((res:any)=>{
      this.Grupos = res.grupos;
    })
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
  }

  onSubmit(){
    this.restTeam.saveTeam(this.grupoId, this.grupo).subscribe((res:any)=>{
      if(res.teamPush){
        alert(res.message);
      }else{
        alert(res.message);
      }
    })
  }

  


 
}
