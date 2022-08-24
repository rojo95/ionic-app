import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { Share } from '@capacitor/share';
import { AlertController, Platform } from '@ionic/angular';
import { ApiServiceService } from './services/apiService/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Scann QR', url: '/scann-qr', icon: 'qr-code' },
    { title: 'Customers', url: '/customers', icon: 'people' },
    { title: 'Cities', url: '/cities', icon: 'business' },
    { title: 'Users', url: '/userslist', icon: 'planet' },
    { title: 'Geolocation', url: '/geolocation', icon: 'location' },
    { title: 'Maps', url: '/map', icon: 'map' },
  ];

  // appVersion = this.apiService.version;
  response: any = [];


  constructor(
    private platform: Platform,
    private apiService: ApiServiceService,
    private alert: AlertController,
    private router: Router
  ) {
    this.initializeApp();
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  initializeApp() {
    this.checkVersion();
    this.checkAppStatus();
  }

  checkAppStatus() {
    this.apiService.getInfoApi().subscribe((res: any)=>{
      if(!res.app_active) {
        this.alertAppDown();
        console.log('inactiva');
      } else {
        if((this.platform.is('android') && !res.android_active) || (this.platform.is('ios') && !res.ios_active)){
          console.log('inactiva en tu plataforma');
          this.alertAppDown();
        }
      }
    });
  }

  async alertAppDown() {
    const alert = await this.alert.create({
      header: 'ERROR AL CONECTAR CON EL SERVIDOR!',
      message: 'Por favor, pongase en contacto con su administrador de sistemas.',
      buttons: [{
        text: 'ACEPTAR',
        role: 'confirm',
        handler: ()=> {
          App.exitApp();
        }
      }],
      backdropDismiss: false
    });
    alert.present();
  }

  checkVersion() {
    this.apiService.getInfoApi().subscribe((res)=> {
      this.response = res;
      if(this.platform.is('android')) {
        console.log('la plataforma es Android');
        App.getInfo().then(info => {
          if(info.version >= this.response.android_version) {
            console.log('correcto');
          } else {
            this.alertUpdate(2);
            console.log('incorrecto');
          }
        });
      } else if(this.platform.is('ios')) {
        console.log('la plataforma es iOS');
        App.getInfo().then(info => {
          if(info.version >= this.response.ios_version) {
            console.log('correcto');
          } else {
            this.alertUpdate(1);
            console.log('incorrecto');
          }
        });
      }
    });
  }

  async alertUpdate(t: number) {
    let url: string;
    if(t === 1) {
      url = 'https://apps.apple.com/es/app/angry-birds-2/id880047117';
    } else if(t === 2) {
      url = 'https://play.google.com/store/apps/details?id=com.rovio.baba&hl=es_VE&gl=US';
    }

    const alert = await this.alert.create({
      header: '¡Debe Actualizar la Aplicación!',
      message: 'Será redireccionado para que descargue Angry Birds mientras la actualizamos :3',
      buttons: [
        {
          text: 'Aceptar',
          role: 'confirm',
          handler: ()=> {
            window.open(url, '_system');
            App.exitApp();
          }
        }
      ],
      backdropDismiss: false
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

  shareApp() {
    Share.share({
      title: '¡Comparte nuestra aplicación con tus amigos!',
      text: 'Ésto es un botón para compartir de prueba, lo cual te enviará a la página oficial del framework de ionic.',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Recuerda siempre compartir con tus amigos ;)',
    });
  }

}
