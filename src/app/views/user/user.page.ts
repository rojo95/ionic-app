import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user = JSON.parse(localStorage.getItem('userData'));

  constructor(
    private router: Router
  ) {
    if(!localStorage.getItem('userData')) {
      this.router.navigate(['/userslist']);
    }
   }

  ngOnInit() {
    localStorage.removeItem('userData');
  }

}
