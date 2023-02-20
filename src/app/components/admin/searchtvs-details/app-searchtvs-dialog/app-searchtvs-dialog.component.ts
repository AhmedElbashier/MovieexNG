import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-app-searchtvs-dialog',
  templateUrl: './app-searchtvs-dialog.component.html',
  styleUrls: ['./app-searchtvs-dialog.component.scss']
})
export class AppSearchTvsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppSearchTvsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog() {
    this.dialogRef.close('movie');
  }

  ngOnInit() {
  }

}
