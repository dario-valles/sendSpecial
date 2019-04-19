import { Component, OnInit } from '@angular/core';
import { Models3dService } from '../services/models3d/models3d.service';
import { StorageService } from '../services/storage/storage.service';
import { Model3d } from '../model3d';
import {
  transition,
  animate,
  trigger,
  state,
  style
} from '@angular/animations';

@Component({
  selector: 'app-list-models',
  templateUrl: './list-models.component.html',
  styleUrls: ['./list-models.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow'
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.5,
          backgroundColor: 'green'
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')])
    ])
  ]
})
export class ListModuleComponent implements OnInit {
  models: Model3d[];

  constructor(
    private ModelS: Models3dService,
    private StorageS: StorageService
  ) {}

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  getModels() {
    this.ModelS.getModels();
  }

  setObjectIdOnStorage(objectId) {
    this.StorageS.setObject(objectId);
  }

  search(term) {
    this.ModelS.filterMaterials(term.value);
  }

  ngOnInit() {
    this.getModels();
    const result = this.ModelS.models$;
    result.subscribe(models => (this.models = models));
  }
}
