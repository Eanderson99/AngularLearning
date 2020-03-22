import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  @Input('my-num') myNum
  @Output('m-event') myEvent = new EventEmitter()

  constructor() { }

  onClick() {
    this.myEvent.emit(5) // myEvent work
  }
}
