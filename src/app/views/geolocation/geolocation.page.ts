import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { NativeGeocoderOptions, NativeGeocoderResult, NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';

import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {

  location: any = [];
  direccion: string;
  // location = localStorage.getItem('location');
  // locationSearched: any;
  // locationSelected: any;
  coords: any = [];
  loading = this.loadingCtrl.create();

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private alert: AlertController,
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
  }

  async locate(){
    (await this.loading).present();
    const coordinates = await this.geolocation.getCurrentPosition();
    this.coords = coordinates.coords;
    console.log('Coordenadas: ',this.coords);
    this.getCity(this.coords.latitude,this.coords.longitude);
  }

  async getCity(latitude,longitude) {
    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5,
    };
    this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => this.saveCity(result))
      .catch((error: any)=> this.alertPresent(error,'¡ERROR!'));
      (await this.loading).dismiss();
  }

  saveCity(result) {
    console.log(JSON.stringify(result[0]));
    this.location = result[0];
    this.direccion = JSON.stringify(result[0]);
    // const localidad = JSON.stringify(result[0].locality);
  }

  async alertPresent(data,title){
    const alert = await this.alert.create({
      header: title,
      message: data,
      buttons: ['Aceptar']
    });
    alert.present();
  }

}
