import { ServiceWithInterceptor } from './services/service-with-interceptor.service';
import { MyServiceService } from './services/my-service.service';
import { TestService } from './services/test.service';
import { Component, OnInit } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
})
export class AppComponent implements OnInit {
  title = 'network';

  constructor(private testService: TestService, private myService: MyServiceService, private serviceWithInter: ServiceWithInterceptor) {
  }

  ngOnInit() {
    this.testService.print()
  }

  getUsers() {
    this.myService.getUsers().subscribe(response => {
      console.log(response)
    })
  }

  addUser() {
    this.myService.addUser().subscribe(res => console.log(res))
  }

  deleteUser() {
    this.myService.deleteUser().subscribe(res => console.log(res))
  }

  getUsersResponse() {
    this.myService.getUsersResponse().subscribe((e: HttpEvent<Object>) => {
      if(e.type == HttpEventType.Response)
        console.log("Response ", e);
    })
  }

  getPostsWithIntercept() {
    this.serviceWithInter.getPosts().subscribe(data => console.log(data))
  }

}
