import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError }from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token-usuario': 'claseB23WEB'
    });
    const reqClone = req.clone({
      headers
    });
    return next.handle(reqClone).pipe(
      catchError(this.manejaError)
    );
  }
  manejaError(error: HttpErrorResponse) {
    console.log('Sucedio un Error');
    console.log('Registro en el Log File');
    console.warn(error);
    return throwError(() => new Error("Error del aplicativo Convocatorias"))
  };
  

}
