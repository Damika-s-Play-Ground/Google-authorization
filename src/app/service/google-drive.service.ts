import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Base64} from 'js-base64';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleDriveService {

  readonly BASE_URL: string = 'https://www.googleapis.com/drive/v3/files';

  constructor(private http: HttpClient) {
  }

  getAllFiles(): Observable<IResp2> {

    // @ts-ignore
    const newVar = Observable.create(observer => {
      try {
        // this.http.get<IResp1>(this.BASE_URL + 'mimeType!=folder').subscribe(resp1 => {
          let index = 0;
          this.http.get<IResp1>(this.BASE_URL + '?fields=files(owners(emailAddress),size)').subscribe(resp2 => {
            resp2.files.forEach((file) => {
              observer.next(file);
              if (index === (resp2.files.length - 1)) {
                observer.complete();
              }
              index++;
            });
          });

        // });
      } catch (e) {
        console.log('error');
      }
    });
    return newVar;
  }
}

interface IResp1 {
  files: Array<{
    id: string, size: number, owners: string
  }>;
}

export interface IResp2 {
  owners: string;
  size: number;
}

