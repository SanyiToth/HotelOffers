import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImgUploaderComponent} from "./img-uploader.component";
import {FileUploadModule} from "primeng/fileupload";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [
    ImgUploaderComponent
  ],
    imports: [
        CommonModule,
        FileUploadModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatGridListModule,
        MatTooltipModule
    ],
  exports: [
    ImgUploaderComponent
  ]

})
export class ImgUploaderModule {
}
