import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ImagesService} from "../services/images/images.service";
import {ErrorMessage} from "@angular/compiler-cli/ngcc/src/execution/cluster/api";


@Component({
  selector: 'app-img-uploader',
  templateUrl: './img-uploader.component.html',
  styleUrls: ['./img-uploader.component.scss']
})
export class ImgUploaderComponent implements OnInit {

  @Output() imgDataToParent = new EventEmitter<any[]>();
  successAlert: boolean;
  errorAlert: boolean;
  errorMessage: ErrorMessage | undefined;
  imagesData: any[];

  constructor(private imgService: ImagesService) {
    this.successAlert = false;
    this.errorAlert = false;
    this.imagesData = [];
  }

  ngOnInit(): void {
  }

  onUpload(event: any) {
    this.imgService.uploadImage(event.target.files[0])
      .subscribe(response => {
        this.successAlert = true;
        this.imagesData.push(response.data);
        this.imgDataToParent.emit(this.imagesData);
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
