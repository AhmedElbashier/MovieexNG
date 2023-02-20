import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-app-adminsudanmovie-details',
  templateUrl: './app-adminsudanmovie-details.component.html',
  styleUrls: ['./app-adminsudanmovie-details.component.scss']
})
export class AppAdminsudanmovieDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppAdminsudanmovieDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog() {
    this.dialogRef.close('movie');
  }

  ngOnInit() {
  }

}
