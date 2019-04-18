import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../services/material/material.service';
import { StorageService } from '../services/storage/storage.service';
import { Material } from '../material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-material',
  templateUrl: './list-material.component.html',
  styleUrls: ['./list-material.component.css']
})
export class ListMaterialComponent implements OnInit {
  materials: Material[];
  constructor(
    private MaterialS: MaterialService,
    private StorageS: StorageService
  ) {}

  getMaterials() {
    this.MaterialS.getMaterials();
  }

  setObjectIdOnStorage(objectId) {
    this.StorageS.setObject(objectId);
  }

  search(term) {
    console.log(term.value);
  }

  ngOnInit() {
    this.getMaterials();
    const result = this.MaterialS.materials$;
    result.subscribe(materials => (this.materials = materials));
  }
}
