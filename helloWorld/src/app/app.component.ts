import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  number = 5
  title = 'helloWorld'
  mColor = '#080'

  done(e) {
    console.log(e)
  }
}
