import { Component, OnInit } from '@angular/core';
import { Indicators } from '../../interfaces/indicators';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {

  indicators: Indicators[] = [];

  constructor() { }

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
        name: 'IPC'
      },
      {
        name: 'UF'
      },
      {
        name: 'UTM'
      },
    ]
  }

}
