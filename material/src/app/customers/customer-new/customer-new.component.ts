import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RepDialogComponent } from './../rep-dialog/rep-dialog.component';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  emailFormControl: FormControl;

  constructor(public dialog: MatDialog, public snackbar: MatSnackBar) { }

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

  openUndoSnackBar() {
    const snackbarRef = this.snackbar.open('Undo Reset?', 'UNDO', {
      horizontalPosition: 'end'
    });

    snackbarRef.onAction().subscribe(() => {
      alert("Undo clicked!");
    })
  }

}