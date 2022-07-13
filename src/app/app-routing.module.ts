import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicatorsComponent } from './components/indicators/indicators.component';

const routes: Routes = [
  {
    path: 'indicators',
    component: IndicatorsComponent
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