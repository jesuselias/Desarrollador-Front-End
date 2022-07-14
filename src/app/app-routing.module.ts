import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { DetailsValuesIndicatorComponent } from './components/details-values-indicator/details-values-indicator.component';
import { DetailsIndicatorComponent } from './components/details-indicator/details-indicator.component';

const routes: Routes = [
  {
    path: 'indicators',
    component: IndicatorsComponent
  },
  {
    path: 'valuesIndicator',
    component: DetailsValuesIndicatorComponent
  },
  {
    path: 'detailsIndicator',
    component: DetailsIndicatorComponent
  },
  {
    path: '**',
    redirectTo: '/indicators'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }