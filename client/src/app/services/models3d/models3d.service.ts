import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Model3d } from '../../model3d';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Models3dService {
  models: Model3d[] = [];
  models$ = new BehaviorSubject<Model3d[]>([]);
  originalModelsArray: Model3d[] = [];

  constructor(private http: HttpClient) { }

  getModels() {
    this.http
      .get(environment.SERVER + '/armodels')
      .subscribe((models: Model3d[]) => {
        this.models = models;
        this.models$.next(this.models);
      });
  }
  getModel(id) {
    return this.http.get(environment.SERVER + '/armodels/' + id);
  }
  generatePreview(objectId, audio, details) {
    return this.http.post(environment.SERVER + '/generate', {
      id: objectId,
      audio,
      details,
      vertical: true,
      lightAnimation: true,
      objectAnimation: false
    });
  }
}
