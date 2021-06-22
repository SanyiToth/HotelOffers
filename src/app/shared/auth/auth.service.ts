import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AccessToken, LoginCredential, User} from './auth.interface';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static PATH = '/login';
  jwtSubject: BehaviorSubject<AccessToken>;


  public get currentJwtValue(): AccessToken {
    return this.jwtSubject.value;
  }

  constructor(private http: HttpClient, private router: Router) {
    const jwtToken = JSON.parse(localStorage.getItem('jwt') as string) as AccessToken || undefined;
    this.jwtSubject = new BehaviorSubject<AccessToken>(jwtToken);
  }


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

  logout() {
    localStorage.removeItem('jwt');
   setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);

  }

  isLoggedIn(): boolean {
    return !!this.jwtSubject.value;
  }


}
