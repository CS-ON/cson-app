import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as Leaflet from 'leaflet';
import { businesses } from 'src/app/mocks/mock-data-business';
import { Business } from 'src/app/interfaces/business.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './shopping.component.html',
})
export class ShoppingComponent {

  businesses$!: Observable<Business[]>;

  options: Leaflet.MapOptions = {
    layers: getLayers(),
    zoom: 13,
    center: new Leaflet.LatLng(39.98, -0.04),
  };

  constructor(private readonly dataService: DataService) {}
  ngOnInit() {
    this.businesses$ = this.dataService.getBusinesses();
  }

  menuOpen = false;

  isMenuOpen(isToggled: boolean): void {
    this.menuOpen = isToggled;
  }

}

export const getLayers = (): Leaflet.Layer[] => {
  return [
    new Leaflet.TileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; OpenStreetMap contributors',
        tileSize: 256,
        reuseTiles: true,
        unloadInvisibleTiles: true,
      } as Leaflet.TileLayerOptions
    ),
  ] as Leaflet.Layer[];
};
