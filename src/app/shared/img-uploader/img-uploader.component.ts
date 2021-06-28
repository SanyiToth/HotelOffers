import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ImagesService} from "./images.service";
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
  uploadedImages: Image[];
  src = '';

  constructor(private imgService: ImagesService, private snackBar: MatSnackBar) {
    this.uploadedImages = [];
  }

  ngOnInit(): void {
  }

  onUpload(event: any) {

    this.imgService.postImage(event.target.files[0])
      .subscribe(response => {
        this.newImageData = {
          link: response.data.link,
          height: response.data.height,
          width: response.data.width,
          type: response.data.type,
          size: response.data.size,
          imgId: response.data.id,
        };
        this.imgDataToParent.emit(this.newImageData);
        this.uploadedImages.push(this.newImageData);
        this.snackBar.open('You have successfully uploaded 1 image!', 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }, error => {
        this.errorMessage = error;
        this.snackBar.open(error, 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      })
  }
}
