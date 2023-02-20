import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-app-moviescatalouge-details',
  templateUrl: './app-moviescatalouge-details.component.html',
  styleUrls: ['./app-moviescatalouge-details.component.scss']
})
export class AppMoviescatalougeDetailsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AppMoviescatalougeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog() {
    this.dialogRef.close('movie');
  }

  ngOnInit() {
  }

}
