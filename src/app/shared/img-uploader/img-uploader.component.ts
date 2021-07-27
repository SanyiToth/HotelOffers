import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ImagesService} from "./images.service";
import {ErrorMessage} from "@angular/compiler-cli/ngcc/src/execution/cluster/api";
import {Image} from "../services/offers/offer.interface";
import {NotificationService} from "../services/notification/notification.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-img-uploader',
  templateUrl: './img-uploader.component.html',
  styleUrls: ['./img-uploader.component.scss']
})
export class ImgUploaderComponent implements OnInit {

  @Output() imagesDataToParent = new EventEmitter<Image[]>();
  errorMessage!: ErrorMessage;
  newImageData!: Image;
  uploadedImages: Image[] = [];

  constructor(private imgService: ImagesService,
              private notificationService: NotificationService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.uploadedImages = this.route.snapshot.data.offer?.images;
  }

  onUpload(event: any) {
    const fileName = event.target.files[0].name;
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
        this.notificationService.open('You have successfully uploaded this image!', fileName);
        event.target.value = null;
      }, error => {
        this.errorMessage = error;
        this.notificationService.open(error);
      })
  }


  deleteImage(deleteHash: string, imageId: string) {
    if (confirm(`Are you sure to delete? "${imageId}"`)) {
      this.imgService.deleteImage(deleteHash)
        .subscribe(response => {
          if (response.success) {
            this.uploadedImages = this.uploadedImages
              .filter(item => item.deletehash !== deleteHash);
            this.imagesDataToParent.emit(this.uploadedImages);
            this.notificationService.open('You have successfully deleted this image!', imageId)
          }
        }, error => {
          this.errorMessage = error;
          this.notificationService.open(error);
        })
    }
  }
}
