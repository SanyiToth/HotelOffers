import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImgUploaderComponent} from "./img-uploader.component";


@NgModule({
  declarations: [
    ImgUploaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImgUploaderComponent
  ]

})
export class ImgUploaderModule {
}
