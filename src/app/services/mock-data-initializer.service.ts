import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { catchError, of, switchMap } from 'rxjs';

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
    return this.dbService
      .add('rewards', {
        name: '10% Discount',
        description: 'Get 10% off on your next purchase',
        validityDate: new Date(2024, 11, 30),
        claimed: false,
        points: 100,
      })
      .pipe(
        switchMap(() =>
          this.dbService.add('businesses', {
            name: 'Local Market',
            description: 'A local market with fresh fruits and vegetables.',
            location: 'Downtown Street, Castellón',
            gallery: 'assets/images/market.jpg',
            schedule: new Date(2024, 5, 1),
            rewards: [1],
          })
        )
      );
  }
}
