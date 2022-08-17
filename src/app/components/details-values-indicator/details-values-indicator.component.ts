import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Dolares } from '../../interfaces/Dolares';
import { ValuesIndicatorsService } from 'src/app/services/values-indicators.service';
import { EmitIndicatorService } from 'src/app/services/emit-indicator.service';
import { Indicators } from 'src/app/interfaces/indicators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-values-indicator',
  templateUrl: './details-values-indicator.component.html',
  styleUrls: ['./details-values-indicator.component.css']
})
export class DetailsValuesIndicatorComponent implements OnInit{

  dolares: Dolares[] = [];
  indicators: Indicators[] = [];
  test:any;
  subscription: any;

  constructor(public indicatorsService: ValuesIndicatorsService, 
    private serviceEmitIndicator:EmitIndicatorService,
    private activateRoute:ActivatedRoute
    ) {

    }

  ngOnInit(): void {
    this.test = 'Indicators'
    this.activateRoute.params.subscribe(params =>{
      this.indicators= params.name
      if(params.name === 'Dólar'){
        this.getIndicatorDolar();
      }else 
        if(params.name === 'Euro'){
          this.getIndicatorEuro();
      }else 
      if(params.name === 'IPC'){
        this.getIndicatorIPC();
      }else
      if(params.name === 'UF'){
        this.getIndicatorUF();
      }else
      if(params.name === 'UTM'){
        this.getIndicatorUTM();
      }
    })
    // this.subscription = this.serviceEmitIndicator.dispatchertIndicators.subscribe((data:any) =>{
    // this.indicators= data.name
    // if(data.name === 'Dólar'){
    //   this.getIndicatorDolar();
    // }else 
    //   if(data.name === 'Euro'){
    //     this.getIndicatorEuro();
    // }else 
    //   if(data.name === 'IPC'){
    //     this.getIndicatorIPC();
    //   }else
    //   if(data.name === 'UF'){
    //     this.getIndicatorUF();
    //   }else
    //   if(data.name === 'UTM'){
    //     this.getIndicatorUTM();
    //   }
    // })
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  getIndicatorDolar(){
    this.test = 'Dólar'
    this.indicatorsService.getIndicatorDolar()
      .subscribe( (resp:any) => {
        this.dolares = resp.Dolares;
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
