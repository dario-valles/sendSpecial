import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterialService } from '../services/material/material.service';
import { Material } from '../material';

@Component({
  selector: 'app-list-material',
  templateUrl: './list-material.component.html',
  styleUrls: ['./list-material.component.css']
})
export class ListMaterialComponent implements OnInit {
  materials: Material[];
  constructor(
    private MaterialS: MaterialService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  currentParams;

  linkCreator(id) {
    this.router.navigateByUrl('/materials/' + id);
  }

  getMaterials() {
    this.MaterialS.getMaterials();
  }

  search(term) {
    this.MaterialS.filterMaterials(term.value);
  }

  ngOnInit() {
    this.getMaterials();
    const result = this.MaterialS.materials$;
    result.subscribe(materials => (this.materials = materials));
    this.route.queryParams.subscribe(params => (this.currentParams = params));

    console.log(this.currentParams);
  }
}
