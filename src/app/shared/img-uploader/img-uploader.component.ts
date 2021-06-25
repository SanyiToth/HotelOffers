import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ImagesService} from "../services/images/images.service";
import {ErrorMessage} from "@angular/compiler-cli/ngcc/src/execution/cluster/api";
import {Image} from "../services/offers/offer.interface";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";


@Component({
  selector: 'app-img-uploader',
  templateUrl: './img-uploader.component.html',
  styleUrls: ['./img-uploader.component.scss']
})
export class ImgUploaderComponent implements OnInit {

  @Output() imgDataToParent = new EventEmitter<Image>();

  errorMessage!: ErrorMessage;
  newImageData!: Image;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private imgService: ImagesService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onUpload(event: any) {
    this.imgService.uploadImage(event.target.files[0])
      .subscribe(response => {
        this._snackBar.open('Success! Your offer has been uploaded! We will redirect you to the offers page.', 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.newImageData = {
          link: response.data.link,
          height: response.data.height,
          width: response.data.width,
          type: response.data.type,
          size: response.data.size,
          imgId: response.data.id,
        }
        console.log('child image data', this.newImageData)
        this.imgDataToParent.emit(this.newImageData);
      }, error => {
        this.errorMessage = error;
        this._snackBar.open(error, 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      })
  }
}
