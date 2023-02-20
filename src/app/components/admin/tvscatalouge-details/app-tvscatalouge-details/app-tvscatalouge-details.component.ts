import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-app-tvscatalouge-details',
  templateUrl: './app-tvscatalouge-details.component.html',
  styleUrls: ['./app-tvscatalouge-details.component.scss']
})
export class AppTvscatalougeDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppTvscatalougeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog() {
    this.dialogRef.close('movie');
  }

  ngOnInit() {
  }

}
