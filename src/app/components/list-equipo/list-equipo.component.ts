import { Component, OnInit } from '@angular/core';
import { RestGroupService } from 'src/app/services/restGroup/rest-group.service';
import { CONNECTION } from 'src/app/services/global';
import { fadeIn } from 'src/app/transitions/transitions';



@Component({
  selector: 'app-list-equipo',
  templateUrl: './list-equipo.component.html',
  styleUrls: ['./list-equipo.component.css'],
  animations:[fadeIn]
})
export class ListEquipoComponent implements OnInit {
  Grupos:[];
  uri;

  constructor(private restGroup:RestGroupService) { }

  ngOnInit(): void {
    this.listarGrupos();
    this.uri = CONNECTION.URI;
  }


  listarGrupos(){
    this.restGroup.getGroup().subscribe((res:any)=>{
      if(res.ligas){
        this.Grupos = res.ligas;
        console.log('Grupos cargados');
      }else{
        alert(res.message);
      }
    },
    error=>alert(error.error.message));
  }

  

}
