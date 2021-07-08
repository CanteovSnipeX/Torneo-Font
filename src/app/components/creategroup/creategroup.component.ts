import { Component,OnInit } from '@angular/core';
import { RestGroupService } from 'src/app/services/restGroup/rest-group.service';
import { Grupo } from 'src/app/models/grupo';
import { RestTorneoService } from 'src/app/services/restTorneo/rest-torneo.service';
import { fadeIn } from 'src/app/transitions/transitions';


@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css'],
  animations:[fadeIn]
})
export class CreategroupComponent implements OnInit {

  Torneos:[] = [];
  Grupos:[];
  grupo:Grupo;
  public token;
  public torneo;
  groupSelected:Grupo;
  torneoid:string;

  constructor( private restTorneo:RestTorneoService, private restGroup:RestGroupService) {
  this.grupo = new Grupo('','','','',[]);

  }

  ngOnInit(): void {
    this.restTorneo.getTorneos().subscribe((res:any)=>{
     this.Torneos = res.torneo;
     console.log(this.Torneos);
    })
 
  } 

  onSubmit(){
    console.log(this.torneoid);
  this.restGroup.saveGroup(  this.torneoid, this.grupo).subscribe((res:any)=>{
    if(res.ligaPush){
      alert(res.message);
    }else{
      alert(res.message);
    }
  },
  error => alert(error.error.message))
  }


  updateGrupo(){
    this.restGroup.updateGroup(this.grupo , this.groupSelected).subscribe((res:any)=>{
      if (res.ligaUpdated){
        localStorage.setItem('torneo', JSON.stringify(this.torneo));
      }else{
        alert(res.message);
        this.torneo = this.restTorneo.getTorneo();
        this.Grupos = this.torneo.grupos;
      }
    },
  error => alert(error.error.message));
  }

  deleteGrupo(){
    this.restGroup.removeGroup(this.torneo._id, this.groupSelected._id).subscribe((res:any)=>{
      if(res.contactRemoved){
        alert(res.message)
      }else{
        alert(res.message)
      }
    },
    error => alert(error.error.message));
  }

}
