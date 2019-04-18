import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Model3d } from '../../model3d';

@Injectable({
  providedIn: 'root'
})
export class Models3dService {
  models: Model3d[] = [];
  models$ = new BehaviorSubject<Model3d[]>([]);

  constructor(private http: HttpClient) {}

  getModels() {
    this.http
      .get('http://localhost:3000/armodels')
      .subscribe((models: Model3d[]) => {
        this.models = models;
        this.models$.next(this.models);
      });
  }
}
