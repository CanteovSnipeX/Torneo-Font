import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/transitions/transitions';
import { Team } from 'src/app/models/equipo';
import { RestTeamService } from 'src/app/services/restTeam/rest-team.service';
import { RestGroupService } from 'src/app/services/restGroup/rest-group.service';


@Component({
  selector: 'app-createteam',
  templateUrl: './createteam.component.html',
  styleUrls: ['./createteam.component.css'],
  animations:[fadeIn]
})
export class CreateteamComponent implements OnInit {

  Grupos:[] = [];
  Team:[];
  team :Team;
  public grupo;
  public token;
  groupSelected:Team;
  grupoId:string;


  constructor( private restTeam:RestTeamService, private restGrupo:RestGroupService) {
    this.team = new Team('','',null,'');
   }

  ngOnInit(): void {
    this.restGrupo.getGroup().subscribe((res:any)=>{
      this.Grupos = res.ligas;
      console.log(this.Grupos);
    })

  }

  onSubmit(save){
    console.log(this.grupoId);
    this.restTeam.saveTeam(this.grupoId,this.team).subscribe((res:any)=>{
      if(res.teamPush){
        alert(res.message);
      }else{
        alert(res.message);
      }
    },
    error => alert(error.error.message)
    )

  }


  updateTeam(){

  }

  deleteTeam(){

  }
}
