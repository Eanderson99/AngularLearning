import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myName = "Houari"
  myImg = "../../assets/tiaret.jpg"
  number = 3
  isActive = true
  val = "admin"

  constructor() { }

  ngOnInit(): void {
  }

  onClick(e) {
    console.log(e.target)
  }

  onKeyup(e) {
    console.log(e.target.value)
  }

  printVal() {
    console.log(this.val)
  }

}
