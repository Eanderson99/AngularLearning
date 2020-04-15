import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hostlistenerdemo',
  templateUrl: './hostlistenerdemo.component.html',
  styleUrls: ['./hostlistenerdemo.component.css']
})
export class HostlistenerdemoComponent {

  @HostListener('click') onEventClick() {
    console.log("Clicked inside component!")
  }

  constructor() { }

}
