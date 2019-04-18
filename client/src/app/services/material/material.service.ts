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

  constructor(private http: HttpClient) {}

  getMaterials() {
    this.http
      .get('http://localhost:3000/materials')
      .subscribe((materials: Material[]) => {
        this.materials = materials;
        this.materials$.next(this.materials);
      });
  }
  filterMaterials(term: string) {
    this.materials.filter(material => {
      console.log(term);

      material.title.includes(term);
    });

    this.materials = this.materials.filter(material =>
      material.title.includes(term)
    );
    this.materials$.next(this.materials);
    console.log(this.materials);
  }
}
