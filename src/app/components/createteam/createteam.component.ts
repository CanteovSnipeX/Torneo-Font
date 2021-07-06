import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/transitions/transitions';

@Component({
  selector: 'app-createteam',
  templateUrl: './createteam.component.html',
  styleUrls: ['./createteam.component.css'],
  animations:[fadeIn]
})
export class CreateteamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
