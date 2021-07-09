import { Component,OnInit } from '@angular/core';
import { RestGroupService } from 'src/app/services/restGroup/rest-group.service';
import { Grupo } from 'src/app/models/grupo';
import { RestTorneoService } from 'src/app/services/restTorneo/rest-torneo.service';
import { fadeIn } from 'src/app/transitions/transitions';
import { Router } from '@angular/router';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css'],
  animations:[fadeIn]
})
export class CreategroupComponent implements OnInit {

  Torneos: [] = [];
  grupos:[];
  grupo:Grupo;
  public torneo;
  public token;
  public user;
  groupSelected:Grupo;
  torneoid:string;

  constructor( private restTorneo:RestTorneoService, private restGroup:RestGroupService, private restUser:RestUserService) {
  this.grupo = new Grupo('','','','',[],[]);
  }

  ngOnInit(): void {
    this.restTorneo.getTorneos().subscribe((res:any)=>{
     this.Torneos = res.torneo;
     console.log(this.Torneos);
    })
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
  } 

  onSubmit(save){
  this.restGroup.saveGroup(this.torneoid, this.grupo).subscribe((res:any)=>{
    if(res.GrupoPush){
      save.reset();
      this.grupo = res.GrupoPush;
      localStorage.setItem('grupo', JSON.stringify(this.grupo));
      this.torneo = this.restTorneo.getTorneos();
      this.grupos = this.torneo.grupo;
    }else{
      alert(res.message);
    }
  },
  error => alert(error.error.message))
  }





}
