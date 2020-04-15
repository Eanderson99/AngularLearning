import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goProfile1() {
    // go to other page with passing query params
    this.router.navigate(['/profile'], {queryParams: {id: 1, name: 'houari'}})
  }

}
