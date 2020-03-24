import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  mText = 'houaRi zEgai'
  mObj = {name: 'Mohamed'}
  salary = 1270.54327
  average = 0.73
  mDate = new Date()
}
