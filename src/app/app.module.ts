import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsValuesIndicatorComponent } from './components/details-values-indicator/details-values-indicator.component';
import { DetailsIndicatorComponent } from './components/details-indicator/details-indicator.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IndicatorsComponent,
    DetailsValuesIndicatorComponent,
    DetailsIndicatorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
