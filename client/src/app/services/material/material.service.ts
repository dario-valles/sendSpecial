import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Material } from '../../material';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  materials: Material[] = [];
  originalMaterialsArray: Material[] = [];
  materials$ = new BehaviorSubject<Material[]>([]);
  state: { empty: Material[] };

  constructor(private http: HttpClient) {}

  getMaterials() {
    this.http
      .get('http://localhost:3000/materials')
      .subscribe((materials: Material[]) => {
        this.materials = materials;
        this.originalMaterialsArray = materials;
        this.materials$.next(this.materials);
      });
  }
  filterMaterials(term: string) {
    this.materials = [...this.originalMaterialsArray];
    this.materials = this.materials.filter(material =>
      material.title.toUpperCase().includes(term.toUpperCase())
    );
    this.materials$.next(this.materials);
  }
}
