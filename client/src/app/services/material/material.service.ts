import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Material } from '../../material';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  materials: Material[] = [];
  materials$ = new BehaviorSubject<Material[]>([]);
  state: { empty: Material[] };

  constructor(private http: HttpClient) { }

  getMaterials() {
    this.http
      .get(environment.SERVER + '/materials')
      .subscribe((materials: Material[]) => {
        this.materials = materials;
        this.materials$.next(this.materials);
      });
  }
  getMaterial(id) {
    return this.http.get(environment.SERVER + '/materials/' + id);
  }
}
