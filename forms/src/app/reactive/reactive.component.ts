import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  mForm = new FormGroup({
    user: new FormGroup({
      name: new FormControl(null), // null: default value
      email: new FormControl(null)
    })
  })

  mArrForm  = new FormGroup({
    user: new FormArray([
      new FormControl,
      new FormControl
    ])
  })

  // form validation
  mFormWithValidation = new FormGroup({
    email: new FormControl(null, Validators.required, this.myAsync),
    user: new FormControl(null, this.isUserValid),
    pass: new FormControl(null, [Validators.required, Validators.min(4)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.mForm)
    console.log(this.mForm.get("user").get("name").value) // access to control
    console.log(this.mForm.get("user.name").value) // or
  }

  onSubmitArrForm() {
    console.log(this.mArrForm)
  }

  onSubmitFormWithV() {
    console.log(this.mFormWithValidation)
  }

  isUserValid(control: FormControl) {
    if(control.value == 'mohamed')
      return null
    return {mohamed: true}
  }

  myAsync(control: FormControl) { // validation used in bdd, server (request take time) [~ like Ajax]
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value == 'mohamed')
          resolve(null)
        else
          resolve({mohamed: true})
      }, 1000)
    })
  }

}
