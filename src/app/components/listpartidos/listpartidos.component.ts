import { Component, OnInit } from '@angular/core';
import { CONNECTION } from 'src/app/services/global';
import { fadeIn } from 'src/app/transitions/transitions';
import { RestPartidosService } from 'src/app/services/restPartidos/rest-partidos.service';
import { RestTorneoService } from 'src/app/services/restTorneo/rest-torneo.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-listpartidos',
  templateUrl: './listpartidos.component.html',
  styleUrls: ['./listpartidos.component.css']
})
export class ListpartidosComponent implements OnInit {

  Partidos:[];
  Users:[];
  user;
  uri;

  constructor(private restPartido:RestPartidosService , private restTorneo:RestTorneoService, private restUser:RestUserService) { }

  ngOnInit(): void {
    this.listPartidos();
    this.uri = CONNECTION.URI
    this.user = this.restUser.getUser();
  }



  listPartidos(){
    this.restPartido.getPartidos().subscribe((res:any)=>{
      if(res.match){
        this.Partidos = res.match;
        console.log('Partidos Cargados')
      }else{
        alert(res.message);
      }
    },
    error=> alert(error.error.message))
  }



  
}
