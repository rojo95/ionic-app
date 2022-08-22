import { Injectable } from '@angular/core';
import {
HttpErrorResponse,
HttpEvent,
HttpHandler,
HttpInterceptor,
HttpRequest,
HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private router: Router,) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const refresh = localStorage.getItem('refresh');

    console.log('pasamos por el interceptor');

    if (!token) {
      this.router.navigate(['/login']);
      return next.handle(req);
    }

    const headers = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
      .set('Client', 'app')
    });

    return next.handle(headers).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }), catchError((error: HttpErrorResponse) => {
        console.log('Sucedió un error: ' + error.status);
        // console.log(error.error.message.name);
        console.log('Error: ',error.message);
        if(error.status === 403){
          console.log('El error es 403');
          // type resType = {access: string, refresh: string};
          // this.apiService.postRefresh(refresh).subscribe(
          // (res: resType) => {
          //   console.log('Res refresh:',res);
          //   token = res.access;
          //   refresh = res.refresh;
          //   console.log('token1', token);
          //   console.log('refres1', refresh);
          //   localStorage.setItem('token', token);
          //   localStorage.setItem('refresh', refresh);
          // },
          // (err) => {
          // console.log('bad token');
          // this.router.navigate(['/login']);
          // });
        }

        return throwError(error);
      })
    );

  }
}
