import { Component } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding-page.component.html',
  styleUrls: ['./onboarding-page.component.scss'],
})
export class OnboardingPageComponent {
  viewModal = false;

  textsData = [
    {
      title: `¡Comprar en el comercio local tiene premio!`,
      description: `Encuentra los comercios de la Red de Comercios Locales de Castellón en elmapa de la ciudad.<br><br> Compra en ellos para conseguir premios y recompensas.`,
      isVisible: true
    },
    {
      title: `Si tienes un comercio, esta app también es para tí.`,
      description: `Lorem ipsum sit dolor atmet. Toma ventaja con esta herramienta para fidelizar a tus clientes y dinamizar el comercio local de la provincia.`,
      isVisible: false
    },
    {
      title: `Acumula puntos con tus compras`,
      description: `Acumula 1 punto por cada 1 € gastado en los comercios de la red de comercio local de Castellón. <br> <br> Escanea el código QR Castellón ÓN que encontrarás el los tickets de tus compras para acumular puntos.`,
      isVisible: false
    },
    {
      title: `Reclama premios y recompensas utilizando PUNTOS`,
      description: `Canjea tus PUNTOS en los comercios de la ciudad a cambio de premios y recompensas como: descuentos, cenas, actividades y mucho más.`,
      isVisible: false
    },
  ];

  openModal(): void {
    this.viewModal = !this.viewModal;
  }
}
