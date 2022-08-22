import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/authService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {

  private loading = this.loadCtrlr.create();

  constructor(
    private tokenService: AuthService,
    private router: Router,
    private menu: MenuController,
    private alert: AlertController,
    private loadCtrlr: LoadingController,
  ) { }

  ngOnInit() {
  }

  async restart() {
    this.alertMessage();
  }



  async alertMessage() {
    const alert = await this.alert.create({
      header: '¿DESEA REINICIAR LA CONTRASEÑA?',
      message: 'Se reiniciará la contraseña e iniciará sesión automáticamente.',
      buttons: [
        {
          text: 'SÍ',
          role: 'confirm',
          handler: async () => {
            (await this.loading).present();
            const data = {
              email: 'user',
              password: '123456'
            };
            const info = await this.tokenService.loguearse(data)
              .subscribe(async (res: any) => {
                if(res.users) {
                  const users = res.users;
                  const usuario = users.find(
                    (item: any) => ((item.user === data.email || item.email === data.email) && item.password === data.password)
                  );
                  if(usuario) {
                    (await this.loading).dismiss();
                    localStorage.setItem('token',usuario.token);
                    localStorage.setItem('name',usuario.Usuario);
                    localStorage.setItem('lastnames',usuario.lastnames);
                    await this.router.navigateByUrl('/home');
                  } else {
                    this.alertError('Por favor verifique sus datos de usuario.');
                  }
                } else {
                  this.alertError('Error al traer información del servidor.');
                }
              });
          }
        },
        {
          text: 'NO',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }

  async alertError(msg: string) {
    const alert = await this.alert.create({
      header: '¡ERROR!',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

  ionViewDidEnter(): void {
    this.menu.enable(false);
  }

  ionViewDidLeave(): void {
    this.menu.enable(true);
  }
}

