import { NewService } from './new.service';
import { TestService } from './test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
})
export class AppComponent implements OnInit {
  title = 'network';

  constructor(private testService: TestService) {

  }

  ngOnInit() {
    this.testService.print()
  }

}
