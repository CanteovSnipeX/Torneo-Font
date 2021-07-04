import { Component, OnInit } from '@angular/core';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';



@Component({
  selector: 'app-listorneo',
  templateUrl: './listorneo.component.html',
  styleUrls: ['./listorneo.component.css']
})
export class ListorneoComponent implements OnInit {
  torneos:[];
  user;


  constructor(private restUser:RestUserService) { }

  ngOnInit(): void {
    this.user = this.restUser.getUser();
    this.torneos = this.user.torneo;
    console.log(this.torneos);
    
  }

}
