import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { forkJoin, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockDataInitializerService {
  constructor(private dbService: NgxIndexedDBService) {}

  initializeData() {
    // Usamos forkJoin para manejar múltiples observables
    return forkJoin([
      this.dbService.add('rewards', {
        name: '10% Discount',
        description: 'Get 10% off on your next purchase',
        validityDate: new Date(2024, 11, 30),
        claimed: false,
        points: 100,
      }),
      this.dbService.add('rewards', {
        name: 'Free Coffee',
        description: 'Claim one free coffee',
        validityDate: new Date(2024, 12, 31),
        claimed: false,
        points: 50,
      })
    ]).pipe(
      switchMap((rewardIds: any[]) => {
        // switchMap toma el resultado de forkJoin y continúa con más observables
        return forkJoin([
          this.dbService.add('businesses', {
            name: 'Local Market',
            description: 'A local market with fresh fruits and vegetables.',
            location: 'Downtown Street, Castellón',
            gallery: 'assets/images/market.jpg',
            schedule: new Date(2024, 5, 1),
            rewards: rewardIds.map((id: any) => id),
          }),
          this.dbService.add('businesses', {
            name: 'Bookstore Castellón',
            description: 'Wide range of books from local and international authors.',
            location: 'Main Avenue, Castellón',
            gallery: 'assets/images/bookstore.jpg',
            schedule: new Date(2024, 5, 2),
            rewards: rewardIds.map((id: any) => id),
          })
        ]);
      })
    );
  }
}
