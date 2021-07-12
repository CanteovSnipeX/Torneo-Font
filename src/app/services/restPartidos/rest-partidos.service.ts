import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestPartidosService {

  public token;
  public uri;
  public partido;

  
  private extractData(res:Response) {
    let body = res;
    return body || [] || {}
  }


  constructor(private http:HttpClient) {
    this.uri = CONNECTION.URI;
  }

  getToken(){
    let token = localStorage.getItem('token');
    this.token = (token!= undefined || token != null) ? token : null;
    return token;
  }

  getPartido(){
    let partido = JSON.parse(localStorage.getItem('partido'));
    if( partido ! = undefined || partido != null){
      this.partido = partido
    }else{
      this.partido = null;
    }
    return this.partido;
  }

  savePartido( idGrupo, partido){
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    let params = JSON.stringify(partido);
    return this.http.post(this.uri+'createPatido/'+idGrupo,params,{headers:headers}).pipe(map(this.extractData));
  }

  getPartidos(){
    
  }



}
