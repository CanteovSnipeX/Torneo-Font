import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';
import { RestTorneoService } from '../restTorneo/rest-torneo.service';

@Injectable({
  providedIn: 'root'
})
export class RestGroupService {

  public token;
  public uri;
  public grupo;

  private extractData(res:Response) {
    let body = res;
    return body || [] || {}
  }



  constructor(private http: HttpClient, private restTonero:RestTorneoService ) {
    this.uri = CONNECTION.URI;
   }

   
  getGrupo(){
    let grupo = JSON.parse(localStorage.getItem('grupo'));
    if(grupo != undefined || grupo != null){
      this.grupo = grupo
    }else{
      this.grupo = null;
    }
    return this.grupo;
  }


  getToken(){
    let token = localStorage.getItem('token');
    this.token = (token!= undefined || token != null) ? token : null;
    
    return token;
  }


   saveGroup(idTorneo, grupo){
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.restTonero.getToken()
    })
    let params = JSON.stringify(grupo);
    return this.http.post(this.uri+'createGrupo/'+idTorneo, params , {headers:headers}).pipe(map(this.extractData));
   }


   updateGroup(idTorneo,grupo){
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    let params = JSON.stringify(grupo);
    return  this.http.put(this.uri+idTorneo+'/updateLiga/'+grupo._id,params,{headers:headers}).pipe(map(this.extractData));
   }

   removeGroup(idTorneo,grupo){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    }); 
    return this.http.put(this.uri+idTorneo+'/removeLiga/'+grupo._id, {name: grupo.name}, {headers:headers}).pipe(map(this.extractData))
  
   }

   getGroup(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": this.getToken()
    });
  
    return this.http.get(this.uri+'getGrupo/',{headers: headers}).pipe(map(this.extractData))
   }  
}
