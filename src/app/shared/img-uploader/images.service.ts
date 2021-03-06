import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private static readonly IMGUR_UPLOAD_URL = 'https://api.imgur.com/3/image';
  private static readonly CLIENT_ID: string = '5999e2155ec5874';


  constructor(private http: HttpClient) {
  }


  postImage(image: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Client-ID ${ImagesService.CLIENT_ID}`
      }),
    };
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<any>(`${ImagesService.IMGUR_UPLOAD_URL}`, formData, httpOptions);
  }


  getImage(imageId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Client-ID ${ImagesService.CLIENT_ID}`
      }),
    }
    return this.http.get<any>(`${ImagesService.IMGUR_UPLOAD_URL}/${imageId}`, httpOptions);

  }

  deleteImage(deleteHash: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Client-ID ${ImagesService.CLIENT_ID}`
      }),
    }
    return this.http.delete<any>(`${ImagesService.IMGUR_UPLOAD_URL}/${deleteHash}`, httpOptions);

  }


}
