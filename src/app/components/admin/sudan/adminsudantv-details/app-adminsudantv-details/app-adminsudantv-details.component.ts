import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-app-adminsudantv-details',
  templateUrl: './app-adminsudantv-details.component.html',
  styleUrls: ['./app-adminsudantv-details.component.scss']
})
export class AppAdminsudantvDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppAdminsudantvDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog() {
    this.dialogRef.close('movie');
  }

  ngOnInit() {
  }

}
