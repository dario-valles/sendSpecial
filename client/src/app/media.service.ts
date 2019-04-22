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
    const url = window.URL.createObjectURL(file);
    const data = new FormData();
    console.log(file);
    data.append('file', file);
    console.log(data);
    const result = this.http
      .post('http://localhost:3000/sendmedia', data)
      .toPromise();
    return result;
  }
}
