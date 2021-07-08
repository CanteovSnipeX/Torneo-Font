import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';
import { RestGroupService } from '../restGroup/rest-group.service';

@Injectable({
  providedIn: 'root'
})
export class RestTeamService {

  public token;
  public uri;

  private extractData(res:Response) {
    let body = res;
    return body || [] || {}
  }

  constructor(private http:HttpClient, private restGrupo:RestGroupService) { 
    this.uri = CONNECTION.URI;
  }

  saveTeam(idGrupo, team){
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.restGrupo.getToken()
    })
  let params = JSON.stringify(team);
  return this.http.post(this.uri+'creategrupo/'+idGrupo,params,{headers:headers}).pipe(map(this.extractData));
  }


  


}
