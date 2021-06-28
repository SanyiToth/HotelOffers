import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;

  constructor(private snackBar: MatSnackBar) {
    this.horizontalPosition = 'center';
    this.verticalPosition = 'top';
  }


  open(message: string, fileName: string = '') {
    if (fileName) message = `${message} ${fileName}`;
    return this.snackBar.open(message, 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }
}

