import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/transitions/transitions';
import { Equipo } from 'src/app/models/equipo';
import { RestTeamService } from 'src/app/services/restTeam/rest-team.service';
import { RestGroupService } from 'src/app/services/restGroup/rest-group.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { UploadsTeamService } from 'src/app/services/uploadsTeam/uploads-team.service';
import { CONNECTION } from 'src/app/services/global';

@Component({
  selector: 'app-createteam',
  templateUrl: './createteam.component.html',
  styleUrls: ['./createteam.component.css'],
  animations:[fadeIn]
})
export class CreateteamComponent implements OnInit {

  Grupos:[];
  equipos:[];
  equipo:Equipo;
  public grupo;
  public token;
  public user;
  public uri:string
  public filesToUploadTeam:Array<File>;
  teamSelected:Equipo;
  grupoid:string;


  constructor( private uploadTeam:UploadsTeamService , private restTeam:RestTeamService, private restGrupo:RestGroupService, private restUser:RestUserService  ) {
    this.equipo = new Equipo('','','','');
    this.uri = CONNECTION.URI
   }

  ngOnInit(): void {
    this.restGrupo.getGroup().subscribe((res:any)=>{
      this.Grupos = res.grupos;
      console.log(this.Grupos);

    })
   
  }

  onSubmit(save){
    this.restTeam.saveTeam(this.grupoid, this.equipo).subscribe((res:any)=>{
      if(res.teamPush){
        save.reset();
        this.equipo = res.teamPush;
        localStorage.setItem('team',JSON.stringify(this.equipo));
        this.grupo = this.restTeam.getTeam();
        this.equipos = this.grupo.equipo;
      }else{
        alert(res.message);
      }
    },
    error => alert(error.error.message))
    
    
  }









  uploadImage(){
    this.uploadTeam.fileRequestTeam(this.grupoid, [] ,this.equipo._id, this.filesToUploadTeam, this.token, 'image')
      .then((res:any)=>{
        if(res.user){
          this.user.image = res.userImage;
          localStorage.setItem('user', JSON.stringify(this.user))
        }else{
          alert(res.message)
        }
      })
  }

  fileChange(fileInput){
    this.filesToUploadTeam = <Array<File>>fileInput.target.files;
    console.log(this.filesToUploadTeam)
  }
 
}
