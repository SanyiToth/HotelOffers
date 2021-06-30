import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LoginResponse, LoginCredential, User} from './auth.interface';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static readonly  PATH = '/auth/login';
  static readonly JWT_STORAGE_KEY = 'jwt';

  jwtSubject!: BehaviorSubject<string|null>;


  public get currentJwtValue(): string|null {
    return this.jwtSubject.value;
  }

  constructor(private http: HttpClient, private router: Router) {
    const jwtToken = (localStorage.getItem('jwt') as string) || null;
    this.jwtSubject = new BehaviorSubject<string|null>(jwtToken);
  }

  login(credentials: LoginCredential): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(environment.API_URL + AuthService.PATH, credentials)
      .pipe(
        tap(token => {
          localStorage.setItem(AuthService.JWT_STORAGE_KEY,token.accessToken);
          localStorage.setItem('loggedInProvider', JSON.stringify(token.loggedInProvider));
          this.jwtSubject.next(token.accessToken);
        })
      );
  }

  logout() {
    localStorage.removeItem(AuthService.JWT_STORAGE_KEY);
    localStorage.removeItem('loggedInProvider');
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);

  }

  isLoggedIn(): boolean {
    return !!this.jwtSubject.value;
  }


}
