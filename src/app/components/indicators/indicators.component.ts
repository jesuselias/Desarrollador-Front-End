import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EmitIndicatorService } from 'src/app/services/emit-indicator.service';
import { Indicators } from '../../interfaces/indicators';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {

  indicators: Indicators[] = [];
  test:any;

  constructor(private router: Router, private serviceEmitIndicator:EmitIndicatorService) { }

  ngOnInit(): void {
    this.indicators = 
    [
      {
        name: 'Dólar'
      },
      {
        name: 'Euro'
      },
      {
        name: 'UF'
      },
      {
        name: 'IPC'
      },
      {
        name: 'UTM'
      },
    ]
  }

  valuesIndicators(name:any){
    this.test = 'fine values'
    setTimeout(()=>{
    this.serviceEmitIndicator.dispatchertIndicators.emit(
      {
        'name': name
      }
    )
   
  })
  this.router.navigate(['/valuesIndicator'])
  }

  detailsIdicator(name:any){
    this.test = 'fine details'
    setTimeout(()=>{
    this.serviceEmitIndicator.dispatchertIndicators.emit(
      {
        'name': name
      }
    )
   
  })
  this.router.navigate(['/detailsIndicator'])
  }

}

