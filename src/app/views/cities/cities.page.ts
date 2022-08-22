import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  token = localStorage.getItem('token');
  cities: any = [];

  constructor(
    private http: HttpClient,
    private toastController: ToastController,
    private alertController: AlertController,
    private router: Router
    ) { }

  ngOnInit() {
    // console.log(this.token);
    // localStorage.removeItem('token');
    // localStorage.clear();
    this.getCities().subscribe(res => {
      this.cities = res;
    });
  }

  getCities() {
    return this.http
      .get('assets/files/cities.json')
      .pipe(
        map( (res: any) => res.data )
      );
  }

  async presentToast1(){
    const toast = await this.toastController.create({
      message: 'Ciudad seleccionada',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Borrar Ciudad',
      message: 'Se ha borrado la ciudad correctamente.',
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Borrar Ciudad',
      message: '¿Estás seguro?',
      buttons: [{
        text: 'No',
        handler: () => {
          console.log('Cancelado.');
        }
      },
      {
        text: 'Sí',
        handler: () => {
          console.log('Ciudad eliminada.');
        }
      }
    ]
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }


  async doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
