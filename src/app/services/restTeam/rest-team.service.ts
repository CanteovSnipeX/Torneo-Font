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

  
  getToken(){
    let token = localStorage.getItem('token');
    this.token = (token!= undefined || token != null) ? token : null;
    
    return token;
  }

  constructor(private http:HttpClient) { 
    this.uri = CONNECTION.URI;
  }

  saveTeam(id, team){
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
  let params = JSON.stringify(team);
  return this.http.post(this.uri+'creategrupo/'+id, params , {headers:headers}).pipe(map(this.extractData));
  }


  


}
