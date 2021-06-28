import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

export class Config {

  private static snackBar: MatSnackBar;
  private static readonly horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private static readonly verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor() {
  }


  public static open(message: string) {
    this.snackBar.open(message, 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }
}
