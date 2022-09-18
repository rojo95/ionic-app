import { Component, OnInit, OnDestroy } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';

import 'leaflet-routing-machine';

// configuracion del icono origen
const iconOrigin = {icon: Leaflet.icon({
  iconSize: [ 40, 40],
  iconAnchor: [ 20, 22 ],
  iconUrl: 'assets/img/icon.png',
  // shadowUrl: 'assets/img/map_markers/marker-shadow.png'
})}

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

  interval: any;

  // control de la ruta
  routeControl: any;

  constructor(
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() :void {
    this.interval = setInterval(() => {
      this.updateMap();
     }, 3000);
   }

  ionViewDidEnter() { this.locate(); }

/**
 * Funcion para actualizar la posicion del usuario y la ruta al objetivo
 */
  async updateMap(){

    this.coords = await (await this.geolocation.getCurrentPosition()).coords;
    this.usermarker.remove();
    this.usermarker = Leaflet.marker([this.coords.latitude, this.coords.longitude], iconOrigin).addTo(this.map).bindPopup('Tú');
    this.path.setWaypoints([
      Leaflet.latLng([this.coords.latitude, this.coords.longitude]),
      this.path.options.waypoints[1],
    ]);
    console.log('updateMap');

  }

  /**
   * Ruta desde tu ubicacion a una localizacion
   */
  async locate(){
    (await this.loading).present();



    // const icon2 = {icon: Leaflet.icon({
    //   iconSize: [ 25, 41 ],
    //   iconAnchor: [ 13, 40 ],
    //   iconUrl: 'assets/img/map_markers/marker-icon.png',
    //   shadowUrl: 'assets/img/map_markers/marker-shadow.png'
    // })}

    // configuracion del icono destion
    const iconDestiny = {icon: Leaflet.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 40 ],
      iconUrl: 'assets/img/map_markers/marker-icon.png',
      shadowUrl: 'assets/img/map_markers/marker-shadow.png'
    })}

    const coordinates = await this.geolocation.getCurrentPosition();
    this.coords = coordinates.coords;

    // zona donde se centrara el mapa
    this.map = new Leaflet.Map('mapId').setView([this.coords.latitude, this.coords.longitude], 17);;

    // marcador ubicacion
    this.usermarker = Leaflet.marker([this.coords.latitude, this.coords.longitude], iconOrigin).addTo(this.map).bindPopup('Tú');

    // marcador 2
    Leaflet.marker(this.objetivo,iconDestiny).addTo(this.map).bindPopup('Pedido');


    // mapa y titulo del mapa
    Leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'ovnisolutions.com'
    }).addTo(this.map);

    // configuracion de la ruta
    this.path = await Leaflet.Routing.control({
      // createMarker: function(i: number, waypoint: any, n: number) {
      //   const marker = Leaflet.marker(waypoint.latLng, {
      //     draggable: false,
      //     bounceOnAdd: false,
      //     bounceOnAddOptions: {
      //       duration: 1000,
      //       height: 800,
      //       function() {
      //         // (bindPopup(myPopup).openOn(map))
      //       }
      //     },
      //     icon: Leaflet.icon({
      //       iconUrl: 'assets/img/map_markers/marker-icon-2x.png',
      //       iconSize: [35, 60],
      //       iconAnchor: [15, 59],
      //       popupAnchor: [-3, -76],
      //       shadowUrl: 'assets/img/map_markers/marker-shadow.png',
      //       shadowSize: [68, 95],
      //       shadowAnchor: [22, 94]
      //     })
      //   })
      //   return marker;
      // },
      // router: Leaflet.Routing.osrmv1({
      //   language: "es",
      // }),
      createMarker: function() {},
      showAlternatives: true,
      lineOptions: {
        styles: [
          {color: '#660fef', weight: 3},
          {color: '#fff', weight: 2},
        ],
        extendToWaypoints: false,
        missingRouteTolerance: 0,
      },
      fitSelectedRoutes: false,
      altLineOptions: {
        styles: [{color: 'grey', weight: 2}],
        extendToWaypoints: false,
        missingRouteTolerance: 0
      },
      show: false,
      routeWhileDragging: true,
      draggableWaypoints: false,
      addWaypoints: false,
      waypoints: [
        Leaflet.latLng(this.coords.latitude, this.coords.longitude),
        Leaflet.latLng(this.objetivo)
      ]
    }).addTo(this.map);

    (await this.loading).dismiss();

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
  ngOnDestroy() :void {
    this.map.remove();
    clearInterval(this.interval);
    console.log('mapa cerrado, se detuvo la actualizacion automatica')
  }


}
