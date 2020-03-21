import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-my-comp]',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent {

  hiddenData = null
  counter = 0

  constructor() { 
    setInterval(() => {
      this.counter += 1
    }, 1000)

    setTimeout(() => {
      this.hiddenData = "Helloooo, i'm showing after 2 seconds."
    }, 2000)
  }

  getData() {
      return "Hello Angular xD, my name is Houari ZEGAI :D"
  }

}
