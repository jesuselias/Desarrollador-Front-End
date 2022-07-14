import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

  private BASE_URL_API: string = '';
  params1 ={
    apikey:'bf6b491ec46caf655a1204c927f559580679f4c4',
    formato: 'json',
    Year: '2022',
    Month: '06',
    Day: '04' 
  }
  params2 ={
    apikey:'bf6b491ec46caf655a1204c927f559580679f4c4',
    formato: 'json',
    Year: '2021',
    Month: '07',
  }

  constructor(public http: HttpClient) { 
    this.BASE_URL_API = environment.apiUrl;
  }
 
  getIndicatorDolar(): Observable<any> {

    return this.http.get(this.BASE_URL_API + "/dolar", {params: this.params1});
    
  }

  getIndicatorEuro(): Observable<any> {

    return this.http.get(this.BASE_URL_API + "/euro", {params: this.params1});
    
  }

  getIndicatorIPC(): Observable<any> {

    return this.http.get(this.BASE_URL_API + "/ipc", {params: this.params1});
    
  }

  getIndicatorUF(): Observable<any> {

    return this.http.get(this.BASE_URL_API + "/uf", {params: this.params2});
    
  }

  getIndicatorUTM(): Observable<any> {

    return this.http.get(this.BASE_URL_API + "/utm", {params: this.params2});
    
  }

}
