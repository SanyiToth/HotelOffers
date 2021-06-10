import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AccessToken, LoginCredential, User} from './auth.interface';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {environment} from "../../../environments/environment.prod";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static PATH = '/login';

  public get currentJwtValue(): AccessToken {
    return this.jwtSubject.value;
  }

  constructor(private http: HttpClient) {
    const jwtToken = JSON.parse(localStorage.getItem('jwt') as string) as AccessToken || undefined;
    this.jwtSubject = new BehaviorSubject<AccessToken>(jwtToken);
  }

  jwtSubject: BehaviorSubject<AccessToken> = new BehaviorSubject<AccessToken>(null);


  login(credentials: LoginCredential): Observable<AccessToken> {
    return this.http
      .post<AccessToken>(environment.API_URL + AuthService.PATH, credentials)
      .pipe(
        tap(token => {
          localStorage.setItem('jwt', JSON.stringify(token));
          this.jwtSubject.next(token);
        })
      );
  }

  logout(): void {
    localStorage.setItem('jwt', JSON.stringify(''));
    this.jwtSubject.next(null);
  }


  isLoggedIn(): boolean {
    console.log('this.currentJwtValue', this.currentJwtValue);
    return !!this.jwtSubject.value;
  }


}
