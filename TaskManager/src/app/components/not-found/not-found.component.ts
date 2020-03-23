import { Router } from '@angular/Router';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  constructor(private router: Router, private title: Title) {
    this.title.setTitle('404 Page - Task Manager')
  }

  goHome() {
    this.router.navigate(['/'])
  }

}
