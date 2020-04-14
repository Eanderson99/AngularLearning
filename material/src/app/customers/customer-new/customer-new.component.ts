import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RepDialogComponent } from './../rep-dialog/rep-dialog.component';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  emailFormControl: FormControl

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ])
  }

  openRepDialog() {
    const dialogRef = this.dialog.open(RepDialogComponent, {
      width: '300px',
      height: '230px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      alert(`User choose ${result}`);
    })
  }

}