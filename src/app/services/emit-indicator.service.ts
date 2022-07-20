import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitIndicatorService {

  test:any;

  @Output() dispatchertIndicators = new EventEmitter();
  constructor() { 
    this.test='service emit-indicators'
  }
}
