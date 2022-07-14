import { Component, OnInit } from '@angular/core';
import { Dolares } from 'src/app/interfaces/Dolares';
import { Indicators } from 'src/app/interfaces/indicators';
import { EmitIndicatorService } from 'src/app/services/emit-indicator.service';
import { IndicatorsService } from 'src/app/services/indicators.service';
import { ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-details-indicator',
  templateUrl: './details-indicator.component.html',
  styleUrls: ['./details-indicator.component.css']
})
export class DetailsIndicatorComponent implements OnInit {

  dolares: Dolares[] = [];
  indicators: Indicators[] = [];
  valor:any;
  codigo:any;
  fecha:any
  simbolo:any

  public lineChartData: Array<any> = [
    15, 20, 19, 18, 0, 10, 11, 12
  ];

  public lineChartLabels: Array<any> = ['100,0', '200', '300'];

  public lineChartOptions: any = {
    responsive: true,
    scales : {
    yAxes: [{
       ticks: {
        //  steps : 25,
        //  stepValue : 15,
        //  max : 40,
          min : 0,
        }
    }] 
  }
  };

  lineChartLegend=true;
  lineChartPlugins=[]
  public lineChartType = 'line';

  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  constructor(public indicatorsService: IndicatorsService,private serviceEmitIndicator:EmitIndicatorService) { }

  ngOnInit(): void {
    this.serviceEmitIndicator.dispatchertIndicators.subscribe((data:any) =>{
      this.indicators= data.name
      if(data.name === 'Dólar'){
        this.getIndicatorDolar();
        this.codigo = 'USD'
        this.simbolo = '$'
      }else 
        if(data.name === 'Euro'){
          this.getIndicatorEuro();
          this.codigo = 'EUR'
          this.simbolo = '€'
      }else 
        if(data.name === 'IPC'){
          this.getIndicatorIPC();
          this.codigo = 'IPC'
        }else
        if(data.name === 'UF'){
          this.getIndicatorUF();
          this.codigo = 'UF'
        }else
        if(data.name === 'UTM'){
          this.getIndicatorUTM();
          this.codigo = 'UTM'
        }
      })
  }

  getIndicatorDolar(){
    
    this.indicatorsService.getIndicatorDolar()
      .subscribe( (resp:any) => {
        this.dolares = resp.Dolares;
        this.dolares.forEach((data:any)=>{
          this.valor = data.Valor
          this.fecha = data.Fecha
        }
      )
    })
  }

  getIndicatorEuro(){
    
    this.indicatorsService.getIndicatorEuro()
      .subscribe( (resp:any) => {
        this.dolares = resp.Euros;
      })

    
  }

  getIndicatorIPC(){
    
    this.indicatorsService.getIndicatorIPC()
      .subscribe( (resp:any) => {
        this.dolares = resp.IPCs;

      })

    
  }

  getIndicatorUF(){
    
    this.indicatorsService.getIndicatorUF()
      .subscribe( (resp:any) => {
        this.dolares = resp.UFs;
      })

    
  }

  getIndicatorUTM(){
    
    this.indicatorsService.getIndicatorUTM()
      .subscribe( (resp:any) => {
        this.dolares = resp.UTMs;
      })

  }

}
