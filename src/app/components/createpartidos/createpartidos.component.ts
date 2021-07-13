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
  partido:Partido;
  public grupo;
  public token;
  public user;
  public optionsJosnada = ['Jornada 1','Jornada 2','Jornada 3','Jornada 4','Jornada 5'];
  partidoSelected:Partido;
  grupoid:string;



  constructor(private  restGrupo:RestGroupService, private restMatch:RestPartidosService, private restUser:RestUserService, private restTeam:RestTeamService) { 
    this.partido = new Partido('','','','','');
  }

  ngOnInit(): void {
    this.restGrupo.getGroup().subscribe((res:any)=>{
      this.Grupos = res.grupos;
      console.log(this.Grupos);
    })

    this.restUser.getUsers().subscribe((res:any)=>{
      this.user = res.users;
    })
  }



  onSubmit(save){
      this.restMatch.savePartido(this.grupoid, this.partido).subscribe((res:any)=>{
        if(res.Push){
          save.reset();
          this.partido = res.Push;
          localStorage.setItem('partido',JSON.stringify(this.partido));
          this.grupo = this.restMatch.getPartido();
          this.partidos =  this.grupo.partido;
        }else{
          alert(res.message)
        }
      },
      error=> alert(error.error.message))
  }

}
