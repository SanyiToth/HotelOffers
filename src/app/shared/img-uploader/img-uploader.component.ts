import {Component, OnInit} from '@angular/core';
import {ImagesService} from "../services/images/images.service";

@Component({
  selector: 'app-img-uploader',
  templateUrl: './img-uploader.component.html',
  styleUrls: ['./img-uploader.component.scss']
})
export class ImgUploaderComponent implements OnInit {

  imagesData: any[];

  constructor(private imgService: ImagesService) {
    this.imagesData = [];
  }

  ngOnInit(): void {
  }

  onUpload(event: any) {
    console.log('files', event.target.files[0])
    this.imgService.uploadImage(event.target.files[0])
      .subscribe(response => {
        console.log('Success!');
        this.imagesData.push(response.data)
      }, error => {
        console.log('error', error);
      })
  }
}
