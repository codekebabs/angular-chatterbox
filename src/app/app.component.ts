import { Component, VERSION, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  loggedIn = false;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.User.subscribe(user => this.loggedIn = user);
  }
}
