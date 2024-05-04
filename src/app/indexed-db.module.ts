import { NgModule } from '@angular/core';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'localDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'businesses',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        {
          name: 'description',
          keypath: 'description',
          options: { unique: false },
        },
        { name: 'type', keypath: 'type', options: { unique: false } },
        { name: 'location', keypath: 'location', options: { unique: false } },
        { name: 'gallery', keypath: 'gallery', options: { unique: false } },
        { name: 'schedule', keypath: 'schedule', options: { unique: false } },
        {
          name: 'rewards',
          keypath: 'rewards',
          options: { unique: false, multiEntry: true },
        },
      ],
    },
    {
      store: 'rewards',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        {
          name: 'description',
          keypath: 'description',
          options: { unique: false },
        },
        {
          name: 'validityDate',
          keypath: 'validityDate',
          options: { unique: false },
        },
        { name: 'claimed', keypath: 'claimed', options: { unique: false } },
        { name: 'claimDate', keypath: 'claimDate', options: { unique: false } },
        { name: 'points', keypath: 'points', options: { unique: false } },
      ],
    },
  ],
};

@NgModule({
  declarations: [],
  imports: [NgxIndexedDBModule.forRoot(dbConfig)],
})
export class IndexedDBModule {}
