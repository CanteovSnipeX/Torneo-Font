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

  public httpOptionsAuth = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    })
  }

  private extractData(res:Response) {
    let body = res;
    return body || [] || {}
  }

  constructor(private http:HttpClient, private restUser:RestUserService) { 
   this.uri = CONNECTION.URI;

  }

  saveTorneo(idUser, torneo){
  let params = JSON.stringify(torneo);
  return this.http.post(this.uri+'createTorneo/'+idUser, params ,this.httpOptionsAuth).pipe(map(this.extractData));
  }


}
