import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Business } from '../interfaces/business.interface';
import { Observable } from 'rxjs';
import { Reward } from '../interfaces/reward.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private dbService: NgxIndexedDBService) {}

  addBusiness(business: Business) {
    return this.dbService.add('businesses', business);
  }

  getBusinesses(): Observable<Business[]> {
    return this.dbService.getAll('businesses');
  }

  addReward(reward: Reward) {
    return this.dbService.add('rewards', reward);
  }

  getRewards(): Observable<Reward[]> {
    return this.dbService.getAll('rewards');
  }
}
