import {Component, OnInit} from '@angular/core';
import {ImagesService} from "../services/images/images.service";
import {ErrorMessage} from "@angular/compiler-cli/ngcc/src/execution/cluster/api";

@Component({
  selector: 'app-img-uploader',
  templateUrl: './img-uploader.component.html',
  styleUrls: ['./img-uploader.component.scss']
})
export class ImgUploaderComponent implements OnInit {

  imagesData: any[];
  successAlert: boolean;
  errorAlert: boolean;
  errorMessage: ErrorMessage | undefined;

  constructor(private imgService: ImagesService) {
    this.imagesData = [];
    this.successAlert = false;
    this.errorAlert = false;
  }

  ngOnInit(): void {
  }

  onUpload(event: any) {
    console.log('files', event.target.files[0])
    this.imgService.uploadImage(event.target.files[0])
      .subscribe(response => {
        this.successAlert = true;
        this.imagesData.push(response.data)
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
