import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-app-searchmovies-dialog',
  templateUrl: './app-searchmovies-dialog.component.html',
  styleUrls: ['./app-searchmovies-dialog.component.scss']
})
export class AppSearchMoviesDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppSearchMoviesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog() {
    this.dialogRef.close('movie');
  }

  ngOnInit() {
  }

}
