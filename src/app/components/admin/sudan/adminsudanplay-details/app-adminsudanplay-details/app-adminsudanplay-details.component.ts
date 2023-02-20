import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-app-adminsudanplay-details',
  templateUrl: './app-adminsudanplay-details.component.html',
  styleUrls: ['./app-adminsudanplay-details.component.scss']
})
export class AppAdminsudanplayDetailsComponent implements OnInit {

  
  constructor(
    public dialogRef: MatDialogRef<AppAdminsudanplayDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog() {
    this.dialogRef.close('movie');
  }

  ngOnInit() {
  }

}
