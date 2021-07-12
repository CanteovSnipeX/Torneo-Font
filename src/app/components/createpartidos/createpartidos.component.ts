import { Component, OnInit } from '@angular/core';
import { RestGroupService } from 'src/app/services/restGroup/rest-group.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { RestPartidosService } from 'src/app/services/restPartidos/rest-partidos.service';
import { fadeIn } from 'src/app/transitions/transitions';
import { Partido  } from 'src/app/models/partido';
import { RestTeamService } from 'src/app/services/restTeam/rest-team.service'; 



@Component({
  selector: 'app-createpartidos',
  templateUrl: './createpartidos.component.html',
  styleUrls: ['./createpartidos.component.css'],
  animations:[fadeIn]
})
export class CreatepartidosComponent implements OnInit {


  Grupos:[];
  partidos:[];
  Teams:[] = [];
  partido:Partido;
  public grupo;
  public token;
  public user;
  public optionsJosnada = ['Jornada 1','Jornada 2','Jornada 3','Jornada 4','Jornada 5'];
  partidoSelected:Partido;
  grupoid:string;
  teamOne:string;
  teamTwo:string;


  constructor(private  restGrupo:RestGroupService, private restMatch:RestPartidosService, private restUser:RestUserService, private restTeam:RestTeamService) { 
    this.partido = new Partido('','','',[]);
  }

  ngOnInit(): void {
    this.restGrupo.getGroup().subscribe((res:any)=>{
      this.Grupos = res.grupos;
      console.log(this.Grupos);
    })

    this.restTeam.getTeams().subscribe((res:any)=>{
      this.Teams = res.teams;
      console.log(this.Teams);
    })   
  }

  onSubmit(){
    console.log(this.partido);
  }


}
