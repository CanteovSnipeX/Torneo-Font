import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RestUserService } from '../restUser/rest-user.service';
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestTorneoService {

  public token;
  public uri;
  public user;
  public torneo;



  private extractData(res:Response) {
    let body = res;
    return body || [] || {}
  }

  constructor(private http:HttpClient, private restUser:RestUserService) { 
   this.uri = CONNECTION.URI;
  }

  getTorneo(){
    let torneo = JSON.parse(localStorage.getItem('torneo'));
    if(torneo != undefined || torneo != null){
      this.torneo = torneo
    }else{
      this.torneo = null;
    }
    return this.torneo;
  }



  saveTorneo(idUser, torneo){
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    })
  let params = JSON.stringify(torneo);
  return this.http.post(this.uri+'createTorneo/'+idUser, params ,{headers: headers}).pipe(map(this.extractData));
  }

  updateTorneo(idUser, torneo){
   let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    })
  let params = JSON.stringify(torneo);
  return this.http.put(this.uri+idUser+'/updateTorneo/'+torneo._id,params,{headers: headers}).pipe(map(this.extractData));      
  }


  removeTorneo(idUser, idTorneo ){
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    })
    return this.http.put(this.uri+idUser+'/removeTorneo/'+idTorneo,null,{headers:headers}).pipe(map(this.extractData));      
  }


}
