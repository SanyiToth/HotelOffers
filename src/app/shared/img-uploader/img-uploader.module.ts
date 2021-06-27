import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImgUploaderComponent} from "./img-uploader.component";
import {FileUploadModule} from "primeng/fileupload";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ImgUploaderComponent
  ],
    imports: [
        CommonModule,
        FileUploadModule,
        MatSnackBarModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule
    ],
  exports: [
    ImgUploaderComponent
  ]

})
export class ImgUploaderModule {
}
