import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {

  users: any =[];
  constructor(
    private http: HttpClient,
    private router: Router,
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    const users = this.http.get('https://rickandmortyapi.com/api/character')
      .pipe(
        map((res: any)=> res.results )
      );
    await users .subscribe(res => {
      this.users = res;
      loading.dismiss();
    });
  }

  async changeView(id: number) {
    const loading = await this.loadingCtrl.create();
    loading.present();
    const user = await this.http.get('https://rickandmortyapi.com/api/character/'+id)
      .pipe(
        map((res: any) => res)
      );

    await user.subscribe(res=>{
      localStorage.setItem('userData',JSON.stringify(res));
      this.router.navigate(['/user']);
      loading.dismiss();
    });
  }

  async doRefresh(event) {
    console.log('Begin async operation');
    await this.getUsers();
    event.target.complete();
  }

}
