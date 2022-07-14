import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitIndicatorService {

  @Output() dispatchertIndicators = new EventEmitter();
  constructor() { }
}
