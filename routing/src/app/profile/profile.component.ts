import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => console.log(params.get('id'))) // normal params
    this.route.queryParamMap.subscribe(params => console.log(params.get('id') + ' ' + params.get('name'))) // query params
  }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate([''])
  }
}
