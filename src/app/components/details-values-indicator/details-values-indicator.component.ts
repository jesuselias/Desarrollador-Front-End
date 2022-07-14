import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Dolares } from '../../interfaces/Dolares';
import { ValuesIndicatorsService } from 'src/app/services/values-indicators.service';
import { EmitIndicatorService } from 'src/app/services/emit-indicator.service';
import { Indicators } from 'src/app/interfaces/indicators';

@Component({
  selector: 'app-details-values-indicator',
  templateUrl: './details-values-indicator.component.html',
  styleUrls: ['./details-values-indicator.component.css']
})
export class DetailsValuesIndicatorComponent implements OnInit{

  dolares: Dolares[] = [];
  indicators: Indicators[] = [];

  constructor(public indicatorsService: ValuesIndicatorsService, private serviceEmitIndicator:EmitIndicatorService) {}

  ngOnInit(): void {
    
    this.serviceEmitIndicator.dispatchertIndicators.subscribe((data:any) =>{
    this.indicators= data.name
    if(data.name === 'Dólar'){
      this.getIndicatorDolar();
    }else 
      if(data.name === 'Euro'){
        this.getIndicatorEuro();
    }else 
      if(data.name === 'IPC'){
        this.getIndicatorIPC();
      }else
      if(data.name === 'UF'){
        this.getIndicatorUF();
      }else
      if(data.name === 'UTM'){
        this.getIndicatorUTM();
      }
    })
  }

  getIndicatorDolar(){
    
    this.indicatorsService.getIndicatorDolar()
      .subscribe( (resp:any) => {
        this.dolares = resp.Dolares;
    })
  }

  getIndicatorEuro(){
    
    this.indicatorsService.getIndicatorEuro()
      .subscribe( (resp:any) => {
        this.dolares = resp.Euros;

        // this.node.sort((a, b) => {
        //   const date1 = new Date(a.created_at);
        //   const date2 = new Date(b.created_at);
        //   if (date1 > date2) {return -1;}
        //   if (date1 < date2) {return 1;}
        //   return 0;

  
        // });
      })

    
  }

  getIndicatorIPC(){
    
    this.indicatorsService.getIndicatorIPC()
      .subscribe( (resp:any) => {
        this.dolares = resp.IPCs;
        console.log(this.dolares)
        // console.log(resp);
        // console.log(this.node);
        // this.node.sort((a, b) => {
        //   const date1 = new Date(a.created_at);
        //   const date2 = new Date(b.created_at);
        //   if (date1 > date2) {return -1;}
        //   if (date1 < date2) {return 1;}
        //   return 0;

  
        // });
      })

    
  }

  getIndicatorUF(){
    
    this.indicatorsService.getIndicatorUF()
      .subscribe( (resp:any) => {
        this.dolares = resp.UFs;
        // console.log(resp);
        // console.log(this.node);
        // this.node.sort((a, b) => {
        //   const date1 = new Date(a.created_at);
        //   const date2 = new Date(b.created_at);
        //   if (date1 > date2) {return -1;}
        //   if (date1 < date2) {return 1;}
        //   return 0;

  
        // });
      })

    
  }

  getIndicatorUTM(){
    
    this.indicatorsService.getIndicatorUTM()
      .subscribe( (resp:any) => {
        this.dolares = resp.UTMs;
        console.log(this.dolares)
        // console.log(resp);
        // console.log(this.node);
        // this.node.sort((a, b) => {
        //   const date1 = new Date(a.created_at);
        //   const date2 = new Date(b.created_at);
        //   if (date1 > date2) {return -1;}
        //   if (date1 < date2) {return 1;}
        //   return 0;

  
        // });
      })

    
  }

}
