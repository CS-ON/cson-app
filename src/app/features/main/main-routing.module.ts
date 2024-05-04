import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ScorePointsComponent } from './pages/score-points/score-points.component';
import { HowItWorks } from './pages/how-it-works/how-it-works.component';
import { MainPageComponent } from './pages/main/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: MainPageComponent
      },
      {
        path: 'score-points',
        component: ScorePointsComponent
      },
      {
        path: 'how-it-works',
        component: HowItWorks,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
