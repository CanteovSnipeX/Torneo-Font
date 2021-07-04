import { Component, OnInit } from '@angular/core';
import { RestGroupService } from 'src/app/services/restGroup/rest-group.service';
import { Grupo } from 'src/app/models/grupo';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { RestTorneoService } from 'src/app/services/restTorneo/rest-torneo.service';
import { fadeIn } from 'src/app/transitions/transitions';

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css'],
  animations:[fadeIn]
})
export class CreategroupComponent implements OnInit {

  grupo:Grupo;
  public token;
  public torneo;
  public user


  constructor( private restUser:RestUserService, private restTorneo:RestTorneoService, private restGroup:RestGroupService) { 
  this.grupo = new Grupo('','','','',[]);
  }

  ngOnInit(): void {
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
    this.torneo = this.restTorneo.getTorneo();
  }

  onSubmit(form){
  this.restGroup.saveGroup(this.user.torneo._id , this.grupo).subscribe((res:any)=>{
    if(res.ligaPush){
      alert(res.message);
    }else{
      alert(res.message);
    }
  },
  error => alert(error.error.message))
  }

}
