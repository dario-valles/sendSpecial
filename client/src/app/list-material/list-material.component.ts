import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from '../services/material/material.service';
import { Material } from '../material';

@Component({
  selector: 'app-list-material',
  templateUrl: './list-material.component.html',
  styleUrls: ['./list-material.component.css']
})
export class ListMaterialComponent implements OnInit {
  materials: Material[];
  constructor(private MaterialS: MaterialService, private router: Router) {}

  linkCreator(model) {
    this.router.navigate(['/my-selection'], {
      queryParams: { 'material-id': model.id },
      queryParamsHandling: 'merge'
    });
  }

  getMaterials() {
    this.MaterialS.getMaterials();
  }

  ngOnInit() {
    this.getMaterials();
    const result = this.MaterialS.materials$;
    result.subscribe(materials => (this.materials = materials));
    this.linkCreator = this.linkCreator.bind(this);
  }
}
