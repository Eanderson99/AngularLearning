import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testing';
  name
  name2

  constructor(private userSer: UserService) {

  }

  ngOnInit() {
    this.name = 'houari';

    this.userSer.getName().then(name => this.name2 = name)
  }
}
