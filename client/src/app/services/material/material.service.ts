import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Material } from '../../material';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  materials: Material[] = [];
  materials$ = new BehaviorSubject<Material[]>([]);
  state: { empty: Material[] };

  constructor(private http: HttpClient) {}

  getMaterials() {
    this.http
      .get('http://localhost:3000/materials')
      .subscribe((materials: Material[]) => {
        this.materials = materials;
        this.materials$.next(this.materials);
      });
  }
  getMaterial(id) {
    return this.http.get('http://localhost:3000/materials/' + id);
  }
}
