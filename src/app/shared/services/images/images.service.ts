import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private readonly IMGUR_UPLOAD_URL = 'https://api.imgur.com/3/image';
  private clientId: string = '5999e2155ec5874';


  constructor(private http: HttpClient) {
  }


  uploadImage(image: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Client-ID ${this.clientId}`
      }),
    };
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post(`${this.IMGUR_UPLOAD_URL}`, formData, httpOptions);
  }
}
