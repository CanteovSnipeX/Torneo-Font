import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';
import { RestTorneoService } from '../restTorneo/rest-torneo.service';
import { RestUserService } from '../restUser/rest-user.service';

@Injectable({
  providedIn: 'root'
})
export class RestGroupService {

  public token;
  public uri;
  public torneo;

  private extractData(res:Response) {
    let body = res;
    return body || [] || {}
  }

  constructor(private http: HttpClient, private restTonero:RestTorneoService, private restUser:RestUserService ) {
    this.uri = CONNECTION.URI;
   }

   saveGroup(idTorneo, grupo){
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    })
    let params = JSON.stringify(grupo);
    return this.http.post(this.uri+'createLiga/'+idTorneo, params , {headers:headers}).pipe(map(this.extractData));
   }

  
}
