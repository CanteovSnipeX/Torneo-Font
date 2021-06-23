import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/transitions/transitions';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations:[fadeIn]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
