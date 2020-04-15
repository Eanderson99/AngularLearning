import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent {
  counter = 0

  constructor() { 
    var myInterval = setInterval(() => {
      this.counter += 1
      if(this.counter > 7)
        clearInterval(myInterval)
    }, 1000)
  }

  getData() {
      return "Hello Angular xD, my name is Houari ZEGAI :D"
  }

}
