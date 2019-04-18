import { Component, OnInit } from '@angular/core';
import { Models3dService } from '../services/models3d/models3d.service';
import { StorageService } from '../services/storage/storage.service';
import { Model3d } from '../model3d';

@Component({
  selector: 'app-list-models',
  templateUrl: './list-models.component.html',
  styleUrls: ['./list-models.component.css']
})
export class ListModuleComponent implements OnInit {
  models: Model3d[];

  constructor(
    private ModelS: Models3dService,
    private StorageS: StorageService
  ) {}

  getModels() {
    this.ModelS.getModels();
  }

  setObjectIdOnStorage(objectId) {
    this.StorageS.setObject(objectId);
  }

  ngOnInit() {
    this.getModels();
    const result = this.ModelS.models$;
    result.subscribe(models => (this.models = models));
  }
}
