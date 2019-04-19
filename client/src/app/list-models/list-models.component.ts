import { Component, OnInit } from '@angular/core';
import { Models3dService } from '../services/models3d/models3d.service';
import { Router } from '@angular/router';
import { Model3d } from '../model3d';

@Component({
  selector: 'app-list-models',
  templateUrl: './list-models.component.html',
  styleUrls: ['./list-models.component.css']
})
export class ListModuleComponent implements OnInit {
  models: Model3d[];

  linkCreator(id) {
    this.router.navigate(['/materials'], { queryParams: { 'object-id': id } });
  }

  constructor(private ModelS: Models3dService, private router: Router) {}

  getModels() {
    this.ModelS.getModels();
  }

  search(term) {
    this.ModelS.filterMaterials(term.value);
  }

  ngOnInit() {
    this.getModels();
    const result = this.ModelS.models$;
    result.subscribe(models => (this.models = models));
    this.linkCreator = this.linkCreator.bind(this);
  }
}
