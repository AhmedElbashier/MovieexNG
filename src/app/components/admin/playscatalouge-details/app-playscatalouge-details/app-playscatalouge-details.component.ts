import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-app-playscatalouge-details',
  templateUrl: './app-playscatalouge-details.component.html',
  styleUrls: ['./app-playscatalouge-details.component.scss']
})
export class AppPlayscatalougeDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppPlayscatalougeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog() {
    this.dialogRef.close('movie');
  }

  ngOnInit() {
  }

}
