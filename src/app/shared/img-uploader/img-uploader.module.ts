import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImgUploaderComponent} from "./img-uploader.component";
import {FileUploadModule} from "primeng/fileupload";


@NgModule({
  declarations: [
    ImgUploaderComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule
  ],
  exports: [
    ImgUploaderComponent
  ]

})
export class ImgUploaderModule {
}
