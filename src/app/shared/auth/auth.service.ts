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

  private static PATH = '/login';
  jwtSubject: BehaviorSubject<string>;


  public get currentJwtValue(): string {
    return this.jwtSubject.value;
  }

  constructor(private http: HttpClient, private router: Router) {
    const jwtToken = JSON.parse(localStorage.getItem('jwt') as string) || undefined;
    this.jwtSubject = new BehaviorSubject<string>(jwtToken);
  }


  login(credentials: LoginCredential): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(environment.API_URL + AuthService.PATH, credentials)
      .pipe(
        tap(token => {
          localStorage.setItem('jwt', JSON.stringify(token.accessToken));
          localStorage.setItem('loggedInProvider', JSON.stringify(token.loggedInProvider));
          this.jwtSubject.next(token.accessToken);
        })
      );
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('loggedInProvider');
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);

  }

  isLoggedIn(): boolean {
    return !!this.jwtSubject.value;
  }


}
