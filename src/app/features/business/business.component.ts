import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-main',
  templateUrl: './business.component.html',
})
export class BusinessComponent {
  options: Leaflet.MapOptions = {
    layers: getLayers(),
    zoom: 13,
    center: new Leaflet.LatLng(39.98, -0.04),
  };

  constructor(private readonly dataService: DataService) {}
  ngOnInit() {}
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
