import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

/**
 * @title Dialog elements
 */
@Component({
  selector: 'dialog-elements-example',
  templateUrl: 'dialog.component.html',
})
export class DialogElementsExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
  closeDialog()
  {
    this.dialog.closeAll();
    
  }
}

@Component({
  selector: 'dialog.component',
  templateUrl: 'dialog.component.html',
})
export class DialogElementsExampleDialog {}
