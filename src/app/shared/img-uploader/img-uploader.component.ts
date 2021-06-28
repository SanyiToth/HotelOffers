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

  @Output() imagesDataToParent = new EventEmitter<Image[]>();

  errorMessage!: ErrorMessage;
  newImageData!: Image;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  uploadedImages: Image[];

  constructor(private imgService: ImagesService, private snackBar: MatSnackBar) {
    this.uploadedImages = [];
  }

  ngOnInit(): void {
  }

  onUpload(event: any) {
    const fileName = event.target.files[0].name
    this.imgService.postImage(event.target.files[0])
      .subscribe(response => {
        this.newImageData = {
          link: response.data.link,
          height: response.data.height,
          width: response.data.width,
          type: response.data.type,
          size: response.data.size,
          imgId: response.data.id,
          deletehash: response.data.deletehash
        };
        this.uploadedImages.push(this.newImageData);
        this.imagesDataToParent.emit(this.uploadedImages);
        this.snackBar.open(`You have successfully uploaded "${fileName}"!`, 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }, error => {
        this.errorMessage = error;
        this.errorSnackbar(error);
      })
  }

  private errorSnackbar(error: string) {
    this.snackBar.open(error, 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  deleteImage(deleteHash: string, imageId: string) {
    if (confirm(`Are you sure to delete? "${imageId}"`)) {
      this.imgService.deleteImage(deleteHash)
        .subscribe(response => {
          if (response.success) {
            this.uploadedImages = this.uploadedImages
              .filter(item => {
                return item.deletehash !== deleteHash;
              });
            this.imagesDataToParent.emit(this.uploadedImages);
          }
        }, error => {
          this.errorMessage = error;
          this.errorSnackbar(error);
        })
    }
  }
}
