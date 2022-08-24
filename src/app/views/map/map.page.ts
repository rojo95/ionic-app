import { Component, OnInit, OnDestroy } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit, OnDestroy {
  map: Leaflet.Map;
  loading = this.loadingCtrl.create();

  coords: any = [];
  location: any = [];
  usermarker: any;
  objetivo: any = [10.496229, -66.848901]; // ubicacion plaza francia
  path: any;



  constructor(
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() :void {
    setInterval(() => {
      this.resetMap();
      console.log('resetMap')
     }, 3000);
   }

  ionViewDidEnter() { this.locate(); }

/**
 * Funcion para actualizar la posicion del usuario y la ruta al objetivo
 */
  async resetMap(){

    this.coords = await (await this.geolocation.getCurrentPosition()).coords;
    const iconOrigin = {icon: Leaflet.icon({
      iconSize: [25,41],
      iconAnchor: [ 13, 40 ],
      iconUrl: 'assets/img/map_markers/marker-icon.png',
      shadowUrl: 'assets/img/map_markers/marker-shadow.png'
    })};

    this.map.removeLayer(this.usermarker);
    this.map.removeLayer(this.path);
    this.usermarker = Leaflet.marker([this.coords.latitude, this.coords.longitude],iconOrigin).addTo(this.map);
    this.usermarker.setLatLng([this.coords.latitude, this.coords.longitude]);
    this.path = antPath([[this.coords.latitude, this.coords.longitude], this.objetivo],
      {
        delay: 800,
        dashArray: [
          10,
          15
        ],
        weight: 3,
        pulseColor: "#FFFFFF",
        paused: false,
        hardwareAccelerated: true,
        color: '#660fef',
        opacity: 0.5
      })
      .addTo(this.map);

  }

  /**
   * Ruta desde tu ubicacion a una localizacion
   */
  async locate(){
    (await this.loading).present();
    const coordinates = await this.geolocation.getCurrentPosition();
    this.coords = coordinates.coords;

    // zona donde se centrara el mapa
    this.map = new Leaflet.Map('mapId').setView([this.coords.latitude, this.coords.longitude], 17);


    // mapa y titulo del mapa
    Leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'ovnisolutions.com'
    }).addTo(this.map);

    // configuracion del icono origen
    const iconOrigin = {icon: Leaflet.icon({
      iconSize: [25,41],
      iconAnchor: [ 13, 40 ],
      iconUrl: 'assets/img/map_markers/marker-icon.png',
      shadowUrl: 'assets/img/map_markers/marker-shadow.png'
    })}

    // configuracion del icono destion
    const iconDestiny = {icon: Leaflet.icon({
      iconSize: [25,41],
      iconAnchor: [ 13, 40 ],
      iconUrl: 'assets/img/map_markers/marker-icon.png',
      shadowUrl: 'assets/img/map_markers/marker-shadow.png'
    })}

    // marcador 1 centrado
    this.usermarker = Leaflet.marker([this.coords.latitude, this.coords.longitude], iconOrigin).addTo(this.map).bindPopup('Tú');

    // marcador 2
    Leaflet.marker(this.objetivo,iconDestiny).addTo(this.map).bindPopup('Pedido').openPopup();

    // ruta
    this.path = antPath([[this.coords.latitude, this.coords.longitude], this.objetivo],
      {
        delay: 800,
        dashArray: [
          10,
          15
        ],
        weight: 3,
        pulseColor: "#FFFFFF",
        paused: false,
        hardwareAccelerated: true,
        color: '#660fef',
        opacity: 0.5
      })
      .addTo(this.map);

    (await this.loading).dismiss();

    this.map.fitBounds(this.path.getBounds());


  }

  /**
   *
   * Mapa para un solo punto
   */
   async ownLocation(){
    (await this.loading).present();
    const coordinates = await this.geolocation.getCurrentPosition();
    this.coords = coordinates.coords;

    this.map = new Leaflet.Map('mapId').setView([this.coords.latitude, this.coords.longitude], 20);

    Leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'ovnisolutions.com'
    }).addTo(this.map);

    Leaflet.marker([this.coords.latitude, this.coords.longitude], {icon: Leaflet.icon({
      iconSize: [25,41],
      iconAnchor: [ 13, 40 ],
      iconUrl: 'assets/img/map_markers/marker-icon.png',
      shadowUrl: 'assets/img/map_markers/marker-shadow.png'
    })}).addTo(this.map).bindPopup('Tú').openPopup();
    Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Pedido').openPopup();

    antPath([[this.coords.latitude, this.coords.longitude], [34.1526, 77.5771]],
      {
        color: '#FF0000',
        weight: 5,
        opacity: 0.6
       })
      .addTo(this.map);

    /*
    Mapa de un unico punto
    const markPoint = Leaflet.marker([this.coords.latitude, this.coords.longitude], {icon: Leaflet.icon({
      iconSize: [25,41],
      iconAnchor: [ 13, 0 ],
      // specify the path here
      iconUrl: 'assets/img/map_markers/marker-icon.png',
      shadowUrl: 'assets/img/map_markers/marker-shadow.png'
    })});
    markPoint.bindPopup('<p>Pedido</p>');
    this.map.addLayer(markPoint);*/
    (await this.loading).dismiss();

    //this.leafletMap()
    //this.getCity(this.coords);
  }


  objetivoLocate() {
    this.map.setView(this.objetivo, this.map.getZoom(),{
      animate: true,
      duration: 0.5
    });
  }

  miLocalizacion() {
    this.map.setView([this.coords.latitude,this.coords.longitude], this.map.getZoom(), {
      animate: true,
      duration: 0.5
    });
  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map.remove();
  }


}
