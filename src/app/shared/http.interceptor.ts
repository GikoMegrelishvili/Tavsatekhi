//Angular
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

//Other
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthorizationService } from '../landing/authorization/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptorService implements HttpInterceptor {
  constructor(
    private router: Router,
    private authService: AuthorizationService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = this.authService.getAcessToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
    } else {
      this.authService.accessToken().subscribe((res: any) => {
        console.log(res);
        token = res;
        request = request.clone({
          setHeaders: {
            Authorization: 'Bearer ' + token,
          },
        });
      });
    }
    return next.handle(request).pipe(
      tap((event) => {
        //იმ შემთხვევაში თუ რექვესტი გაეშვა
        if (event instanceof HttpResponse) {
        }
      }),
      //იმ შემთხვევაში თუ რექვესტი დაფეილდა
      catchError((error: HttpErrorResponse) => {
        let errorMsg: string = '';
        //კლიენტის მხარის შეცდომა
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          //თუ არ არის ავტორიზებული იუზერი
          if (error.status === 401) {
            setTimeout(() => {
              this.router.navigate(['/landing/auth']);
            }, 3000);
          }
        }
        return throwError(errorMsg);
      })
    );
  }
}
