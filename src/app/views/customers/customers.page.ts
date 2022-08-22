import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  customers: any = [];
  permission: boolean;
  searchedCustomer: any;
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.permission = true;
    this.getCustomers().subscribe(res => {
      this.customers = res;
      this.searchedCustomer = this.customers;
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  getCustomers() {
    return this.http
    .get('assets/files/customers.json')
    .pipe(
      map((res: any)=> res.data)
    );
  }

  searchCustomer(event){
    const text = event.target.value;
    this.searchedCustomer = this.customers;
    if(text && text.trim() !== '') {
      this.searchedCustomer = this.searchedCustomer.filter((user: any)=> (user.name.toLowerCase().indexOf(text.toLowerCase()) > -1));
    }
  }


}
