import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      catchError(this.handleError.bind(this))
    );
  }

  handleError(error: HttpErrorResponse): Observable<HttpEvent<Error>> {
    const errorMessage = 'Ooops! Something happened, try again later! ';
    return throwError(new Error(errorMessage));
  }


}
