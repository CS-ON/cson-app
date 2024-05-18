import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { catchError, from, of, switchMap } from 'rxjs';
import { businessesMock } from '../mocks/mocks-1/business-mock';
import { rewardsMock } from '../mocks/mocks-1/rewards-mocks';

@Injectable({
  providedIn: 'root',
})
export class MockDataInitializerService {
  constructor(private dbService: NgxIndexedDBService) {}

  initializeData() {
    return this.dbService.count('businesses').pipe(
      switchMap((count) => {
        if (count > 0) {
          console.log('Database already initialized.');
          return of(null);
        }
        return this.populateData();
      }),
      catchError((error) => {
        console.error('Error during database initialization:', error);
        return of(null);
      })
    );
  }

 private populateData() {
    console.log('Populating data...');
    const addRewards = from(rewardsMock).pipe(
      switchMap(reward => {
        console.log('Adding reward:', reward);
        return this.dbService.add('rewards', reward);
      })
    );

    const addBusinesses = from(businessesMock).pipe(
      switchMap(business => {
        console.log('Adding business:', business);
        return this.dbService.add('businesses', business);
      })
    );

    return addRewards.pipe(
      switchMap(() => addBusinesses)
    );
  }


}
