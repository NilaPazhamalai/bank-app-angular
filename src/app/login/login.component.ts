import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  user: User = {
    _id: 'dfdf',
    name: '',
    email: '',
    password: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
