import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor(private http: HttpClient) { }

  saveMedia(file) {
    const data = new FormData();
    data.append('file', file);
    const result = this.http.post(environment.SERVER + '/sendmedia', data);
    return result;
  }
}
