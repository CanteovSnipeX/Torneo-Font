import { Component, OnInit } from '@angular/core';
import { RestResultService } from 'src/app/services/restResult/rest-result.service';
import { RestPartidosService } from 'src/app/services/restPartidos/rest-partidos.service';
import { fadeIn } from 'src/app/transitions/transitions';
import { Result } from 'src/app/models/result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  Partidos:[] ;
  public partido;
  result:Result 
  partidoId:string;



  constructor(private restResult:RestResultService, private restPartido:RestPartidosService) {
    this.result = new Result('','','',null,null);
   }

  ngOnInit(): void {
    this.restPartido.getPartidos().subscribe((res:any)=>{
      this.Partidos = res.match;
      console.log(this.Partidos);
    })
  }

  onSubmit(save){
   this.restResult.setResult( this.partidoId , this.result).subscribe((res:any)=>{
     if(res.resultPush){
      alert(res.message);
      save.reset();
      this.result = res.resultPush;
      
     }else{
      alert(res.message);
     }
   },
   error=> alert(error.error.message))
  }


}
