import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImgUploaderComponent} from "./img-uploader.component";
import {FileUploadModule} from "primeng/fileupload";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    ImgUploaderComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    MatSnackBarModule
  ],
  exports: [
    ImgUploaderComponent
  ]

})
export class ImgUploaderModule {
}
