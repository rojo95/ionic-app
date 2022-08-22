import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  // public version = '1.0.0';

  constructor(private http: HttpClient) { }

  getInfoApi(){
    return this.http.get('assets/files/apiSimulation.json');
  }

}
