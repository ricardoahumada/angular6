import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { SessionService } from './session.service';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private session: SessionService
  ) {
  }

  public signIn(username: string, password: string): Observable<any> {
    return this.http.post(API_URL + '/sign-in', {
      username,
      password
    }).pipe(catchError(this.handleError));
  }


  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return throwError(error);
  }

  
}
