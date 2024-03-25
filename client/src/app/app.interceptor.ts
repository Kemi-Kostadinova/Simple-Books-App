import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
// import { ErrorService } from './core/error/error.service';
import { Router } from '@angular/router';

const { apiUrl } = environment

@Injectable()
class AppInterceptor implements HttpInterceptor {
  API = '/user'
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("interceptor");

    if (request.url.startsWith(this.API)) {
      console.log("interceptor", request.url);
      
      request = request.clone({
        url: apiUrl + request.url,
        withCredentials: true
      })
    }
    return next.handle(request)

  }
}

export const appInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS
}
