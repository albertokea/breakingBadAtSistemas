import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (httpRequest.url.charAt(0) !== '/') {
      return next.handle(
        httpRequest.clone({ url: `${environment.baseUrl}${httpRequest.url}` })
      );
    } else {
      return next.handle(httpRequest);
    }
  }
}
