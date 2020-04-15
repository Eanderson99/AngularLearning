import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild('username') myInput : ElementRef;

  myName = "Houari"
  myImg = "../../assets/tiaret.jpg"
  number = 3
  isActive = true
  val = "admin"

  constructor() { }

  onClick(e) {
    console.log(e.target)
  }

  onKeyup(e) {
    console.log(e.target.value)
  }

  printVal() {
    console.log(this.val)
  }

  printData(e) {
    console.log(this.myInput.nativeElement.value)
  }

}
