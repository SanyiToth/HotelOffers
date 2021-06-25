import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ImagesService} from "../services/images/images.service";
import {ErrorMessage} from "@angular/compiler-cli/ngcc/src/execution/cluster/api";
import {Image} from "../services/offers/offer.interface";


@Component({
  selector: 'app-img-uploader',
  templateUrl: './img-uploader.component.html',
  styleUrls: ['./img-uploader.component.scss']
})
export class ImgUploaderComponent implements OnInit {

  @Output() imgDataToParent = new EventEmitter<Image>();
  successAlert: boolean;
  errorAlert: boolean;
  errorMessage!: ErrorMessage;
  newImageData!: Image;

  constructor(private imgService: ImagesService) {
    this.successAlert = false;
    this.errorAlert = false;
  }

  ngOnInit(): void {
  }

  onUpload(event: any) {
    this.imgService.uploadImage(event.target.files[0])
      .subscribe(response => {
        this.successAlert = true;
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
        this.errorAlert = true;
      })
  }

  closeSuccessAlert() {
    this.successAlert = false;
  }

  closeErrorAlert() {
    this.errorAlert = false;
  }
}
