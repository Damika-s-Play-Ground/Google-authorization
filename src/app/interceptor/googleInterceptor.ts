// /**
//  *@author : Damika Anupama Nanayakkara <damikaanupama@gmail.com>
//  *@since : 09/02/2021
//  **/
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable()
export class GoogleInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = sessionStorage.getItem('access_token');
    const newReq = req.clone({
      headers: new HttpHeaders('Authorization:Bearer ' + accessToken)
    });
    return next.handle(newReq).pipe(catchError(err => {
      // If the token is invalid or expired
      if (err.status === 401) {
        window.location.replace(
          'https://accounts.google.com/o/oauth2/v2/auth?client_id=379593086792-b5etgvv88ngrvbq8c521ic1qgv9n2s5i.apps.googleusercontent.com&response_type=token&scope=https://www.googleapis.com/auth/drive.readonly&state=damiboy&redirect_uri=' + environment.redirectUrl);
      }
      throw (err);
    }));
  }


}
