import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global';

@Injectable({
  providedIn: 'root'
})
export class UploadsTeamService {

  public uri:string;


  constructor(private http:HttpClient) { 
    this.uri =  CONNECTION.URI;
  }

  fileRequestTeam(idGrupo:string,  params: Array<string>, idTeam:string, files: Array<File>,token:string, name:string){
    return new Promise((resolve, reject)=>{
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      let uri = this.uri+idGrupo+'/uploadImageTeam/'+idTeam;

      for(var i=0; i< files.length; i++){
        formData.append(name, files[i], files[i].name);
      }
      xhr.onreadystatechange = ()=>{
        if(xhr.readyState == 4){ 
          if(xhr.status == 200){ 
            resolve(JSON.parse(xhr.response));
          }else{
            reject(xhr.response)
          }
        }
      }
      xhr.open('PUT', uri, true);
      xhr.setRequestHeader('Authorization', token);
      xhr.send(formData);
    })
  }


}
