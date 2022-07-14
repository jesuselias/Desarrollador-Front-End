import { Component, OnInit } from '@angular/core';
import { Dolares } from 'src/app/interfaces/Dolares';
import { Indicators } from 'src/app/interfaces/indicators';
import { EmitIndicatorService } from 'src/app/services/emit-indicator.service';
import { IndicatorsService } from 'src/app/services/indicators.service';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions, ChartType, Chart, registerables } from "chart.js";


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
  fecha:any;
  simbolo:any;

  valorG:any;
  fechaG:any;

  chart: any = []

  data = [ 100,10, 200.90, 80, 81, 56, 0.9, 40 ]
  
  constructor(public indicatorsService: IndicatorsService,private serviceEmitIndicator:EmitIndicatorService) { 
    Chart.register(...registerables)
  }

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
        this.valorG = this.dolares.map((data:any)=>
          data.Valor
        )
        this.fechaG = this.dolares.map((data:any)=>
          data.Fecha
        )
  
        let chartStatus = Chart.getChart("canvas"); // <canvas> id

        if (chartStatus != undefined) {
          chartStatus.destroy();
        }
        if (this.chart) {
         
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
              labels: this.fechaG,
              datasets: [{
                  data: this.valorG,
                  label: 'Grafica:',
                  fill: true,
                  tension: 0.5,
                  borderColor: 'black',
                  backgroundColor: 'rgb(135, 198, 223)'
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
            }
        });
      }
    })
    
  }

  getIndicatorEuro(){
    
    this.indicatorsService.getIndicatorEuro()
      .subscribe( (resp:any) => {
        this.dolares = resp.Euros;
        this.dolares.forEach((data:any)=>{
          this.valor = data.Valor
          this.fecha = data.Fecha
        }
      )
      this.valorG = this.dolares.map((data:any)=>
          data.Valor
        )
        this.fechaG = this.dolares.map((data:any)=>
          data.Fecha
        )
        
        let chartStatus = Chart.getChart("canvas"); // <canvas> id

        if (chartStatus != undefined) {
          chartStatus.destroy();
        }
        if (this.chart) {
         
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
              labels: this.fechaG,
              datasets: [{
                  data: this.valorG,
                  label: 'Grafica:',
                  fill: true,
                  tension: 0.5,
                  borderColor: 'black',
                  backgroundColor: 'rgb(135, 198, 223)'
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
            }
        });
      }
    })
  }

  getIndicatorIPC(){
    
    this.indicatorsService.getIndicatorIPC()
      .subscribe( (resp:any) => {
        this.dolares = resp.IPCs;
        this.dolares.forEach((data:any)=>{
          this.valor = data.Valor
          this.fecha = data.Fecha
        }
      )
      this.valorG = this.dolares.map((data:any)=>
          data.Valor
        )
        this.fechaG = this.dolares.map((data:any)=>
          data.Fecha
        )
        
        let chartStatus = Chart.getChart("canvas"); // <canvas> id

        if (chartStatus != undefined) {
          chartStatus.destroy();
        }
        if (this.chart) {
         
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
              labels: this.fechaG,
              datasets: [{
                  data: this.valorG,
                  label: 'Grafica:',
                  fill: true,
                  tension: 0.5,
                  borderColor: 'black',
                  backgroundColor: 'rgb(135, 198, 223)'
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
            }
        });
      }
    })
  }

  getIndicatorUF(){
    
    this.indicatorsService.getIndicatorUF()
      .subscribe( (resp:any) => {
        this.dolares = resp.UFs;
        this.dolares.forEach((data:any)=>{
          this.valor = data.Valor
          this.fecha = data.Fecha
        }
      )
      this.valorG = this.dolares.map((data:any)=>
          data.Valor
        )
        this.fechaG = this.dolares.map((data:any)=>
          data.Fecha
        )
        
        let chartStatus = Chart.getChart("canvas"); // <canvas> id

        if (chartStatus != undefined) {
          chartStatus.destroy();
        }
        if (this.chart) {
         
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
              labels: this.fechaG,
              datasets: [{
                  data: this.valorG,
                  label: 'Grafica:',
                  fill: true,
                  tension: 0.5,
                  borderColor: 'black',
                  backgroundColor: 'rgb(135, 198, 223)'
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
            }
        });
      }
    }) 
  }

  getIndicatorUTM(){
    
    this.indicatorsService.getIndicatorUTM()
      .subscribe( (resp:any) => {
        this.dolares = resp.UTMs;
        this.dolares.forEach((data:any)=>{
          this.valor = data.Valor
          this.fecha = data.Fecha
        }
      )
      this.valorG = this.dolares.map((data:any)=>
          data.Valor
        )
        this.fechaG = this.dolares.map((data:any)=>
          data.Fecha
        )
        
        let chartStatus = Chart.getChart("canvas"); // <canvas> id

        if (chartStatus != undefined) {
          chartStatus.destroy();
        }
        if (this.chart) {
         
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
              labels: this.fechaG,
              datasets: [{
                  data: this.valorG,
                  label: 'Grafica:',
                  fill: true,
                  tension: 0.5,
                  borderColor: 'black',
                  backgroundColor: 'rgb(135, 198, 223)'
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
            }
        });
      }
    })
  }

  // public lineChartData: ChartConfiguration<'line'>['data'] = {
  //   labels: [
  //     '12-07-2022',
  //     '12-07-2022',
  //     '30-04-2022',
  //     '14-07-2022',
  //     '01-07-2022',
  //     '03-07-2022',
  //     '10-07-2022'
  //   ],
  //   datasets: [
  //     {
  //       data: this.data,
  //       label: 'Grafica:',
  //       fill: true,
  //       tension: 0.5,
  //       borderColor: 'black',
  //       backgroundColor: 'rgb(135, 198, 223)'
  //     }
  //   ]
  // };
  // public lineChartOptions: ChartOptions<'line'> = {
  //   responsive: true
  // };
  // public lineChartLegend = true;

  
  // public lineChartColors: Array<any> = [
  //   { // grey
  //     backgroundColor: 'rgb(135, 198, 223)',
  //     borderColor: 'rgb(135, 198, 223)',
  //     pointBackgroundColor: 'rgb(135, 198, 223)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgb(135, 198, 223)'
  //   }
  // ];

}
