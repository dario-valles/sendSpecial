import { Component, OnInit, OnChanges } from '@angular/core';
import { StorageService } from '../services/storage/storage.service';
import { Storage } from '../storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  storage: Storage;

  constructor(private StorageS: StorageService) {}

  ngOnInit() {
    const storage = this.StorageS.storage$;
    storage.subscribe(store => (this.storage = store));
  }
}
