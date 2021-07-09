import { Component, OnInit } from '@angular/core';
import { RestTeamService } from 'src/app/services/restTeam/rest-team.service';
import { CONNECTION } from 'src/app/services/global';

@Component({
  selector: 'app-listequipos',
  templateUrl: './listequipos.component.html',
  styleUrls: ['./listequipos.component.css']
})
export class ListequiposComponent implements OnInit {

  Team:[];
  uri;

  constructor(private restTeam:RestTeamService) { }

  ngOnInit(): void {
    this.listTeams();
    this.uri = CONNECTION.URI;
  }

  listTeams(){
    this.restTeam.getTeam().subscribe((res:any)=>{
      if(res.teams){
        this.Team = res.teams;
        console.log('Equipos Cargados');
      }else{
        alert(res.message)
      }
    },
    error=> alert(error.erro.message));
  }


}
