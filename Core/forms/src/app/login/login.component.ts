import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }

  onLogin(form) {
    console.log(form)
  }

  onReset(f: NgForm) {
    f.reset({ // add default value
      age: 22,
      email: "example@example.com",
      fullname: "unknown",
    })

    // or (for reset value)
    f.setValue({
      user: {
        username: 'user',
        password: 'user'
      },
      age: 22,
      email: "example@example.com",
      fullname: "unknown"
    })

    // or update some inputs not required all like setValue (method 3)
    f.form.patchValue({
        age : 10
    })
  }

}
