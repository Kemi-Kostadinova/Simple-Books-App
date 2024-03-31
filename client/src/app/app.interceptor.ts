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
import { ErrorService } from './core/error/error.service';
import { Router } from '@angular/router';

const { apiUrl } = environment

@Injectable()
class AppInterceptor implements HttpInterceptor {
  API = '/api'
  constructor(private errorService: ErrorService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.startsWith(this.API)) {

      request = request.clone({
        url: request.url.replace(this.API, apiUrl),
        withCredentials: true
      })
    }

    return next.handle(request).pipe(
      catchError((err) => {
        this.errorService.setError(err);
        this.router.navigate(["/error"]);
        return [err];
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS
}
