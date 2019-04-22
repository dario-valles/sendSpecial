// Pending REMOVE
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '../../storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  storage: Storage = { objectId: '' };
  storage$ = new BehaviorSubject<Storage>({ objectId: '' });

  getStorage(): void {
    this.storage$.next(this.storage);
  }

  resetStorage(): void {
    this.storage = { objectId: '' };
    this.storage$.next(this.storage);
  }

  setObject(objectId: string): void {
    this.storage.objectId = objectId;
    this.storage$.next(this.storage);
  }
}
