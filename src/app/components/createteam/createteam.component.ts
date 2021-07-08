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

  grupos:[];
  Team:[];
  team :Team;
  public grupo;
  public token;
  groupSelected:Team;
  grupoId:string;


  constructor( private restTeam:RestTeamService, private restGrupo:RestGroupService) {
    this.team = new Team('','','','');
   }

  ngOnInit(): void {
  }

  onSubmit(){

  }


  updateTeam(){

  }

  deleteTeam(){

  }
}
