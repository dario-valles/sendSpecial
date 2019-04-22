import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor(private http: HttpClient) {}

  // saveMedia(file) {
  //   const data = new FormData();
  //   data.append('file', file, file.name);
  //   return this.http.post('http://localhost:3000/sendmedia', data);
  // }

  saveMedia(file) {
    const data = new FormData();
    data.append('file', file);
    const result = this.http.post('http://localhost:3000/sendmedia', data);
    return result;
  }
}
