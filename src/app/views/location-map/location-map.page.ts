import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.page.html',
  styleUrls: ['./location-map.page.scss'],
})
export class LocationMapPage implements OnInit, OnDestroy {

  // se instancia el mapa
  map: Leaflet.Map;

  // marcadores
  marker: any = [];

  // config icon
  icon: any = {icon: Leaflet.icon({
    iconSize: [25,41],
    iconAnchor: [ 13, 40 ],
    iconUrl: 'assets/img/map_markers/marker-icon.png',
    shadowUrl: 'assets/img/map_markers/marker-shadow.png'
  })}

  // coordenadas
  coords: any = [];

  // cargando...
  loading = this.loadingCtrl.create();

  constructor(
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    // mostrar mapa
    this.map = new Leaflet.Map('map');
    Leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'ovnisolutions.com'
    }).addTo(this.map);

    this.map.on("click", e => {
      this.addLocation(e)
    });
  }

  ionViewDidEnter() { this.locate(); }

  async locate() {
    (await this.loading).present();
    const coordinates = await (await this.geolocation.getCurrentPosition()).coords;

    // dar propiedades de mapa al div mapId, centrar a la zona y dar aumento
    this.map.setView([coordinates.latitude, coordinates.longitude], 17);

    // cerrar cargando
    (await this.loading).dismiss();

  }

  async addMyLocation() {
    const coordinates = await (await this.geolocation.getCurrentPosition()).coords;
    this.coords = {lat: coordinates.latitude,  long: coordinates.longitude};
    this.map.removeLayer(this.marker);
    this.marker = Leaflet.marker([coordinates.latitude, coordinates.longitude], this.icon).addTo(this.map);
    this.map.setView([coordinates.latitude, coordinates.longitude], 17);
  }

  async addLocation(data) {
    this.coords = data.latlng;
    this.map.removeLayer(this.marker);
    this.marker = Leaflet.marker([data.latlng.lat, data.latlng.lng], this.icon).addTo(this.map); // add the marker onclick
  }

  async confirm() {
    console.log(this.coords)
    if (this.coords.lat) {
      this.alertMsg(true)
    } else {
      this.alertMsg(false)
    }

  }

  async alertMsg(type: boolean) {

    const alert = await this.alertCtrl.create({
      header: 'Debe seleccionar algun sitio para su pedido',
      buttons: ['Aceptar']
    });

    const saveAlert = await this.alertCtrl.create({
      header: '¿Está seguro de seleccionar esta dirección?',
      buttons: [
        {
          text: 'Aceptar',
          role: 'confirm',
          handler: async () => {
            console.log('guardado')
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });

    if (type) {
      saveAlert.present();
    } else {
      alert.present();
    }
  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() :void {
    this.map.remove();
    console.log('mapa cerrado')
  }

}
