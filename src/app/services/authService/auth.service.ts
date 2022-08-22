import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = 'awdawda35wd468aw4dW';

  constructor(private http: HttpClient) { }

  loguearse(data) {
    const user = 'user';
    const password = '123456';
    return this.http.get('assets/files/apiSimulation.json');
  }

}
