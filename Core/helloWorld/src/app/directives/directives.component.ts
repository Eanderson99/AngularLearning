import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  open = true
  n = 1
  courses = ['html', 'css', 'js', 'javaee']

  constructor() { }

  ngOnInit(): void {
  }

}
