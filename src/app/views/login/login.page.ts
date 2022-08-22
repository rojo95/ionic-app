import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/authService/auth.service';
import { Platform } from '@ionic/angular';
// prueba
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  form: FormGroup = this.formBuilder.group({
    email: new FormControl('user', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('123456', [Validators.required, Validators.minLength(4)]),
  });;

  private loading = this.loadCtrlr.create();

  constructor(
    private tokenService: AuthService,
    private router: Router,
    private menu: MenuController,
    private alert: AlertController,
    private loadCtrlr: LoadingController,
    private platform: Platform,
    public formBuilder: FormBuilder
    ) {
      this.platform.backButton.subscribeWithPriority(10, () => {
        console.log('Handler was called!');
      });
    }


    ngOnInit() {
    }

    async overrideHardwareBackAction($event: any) {
      await void(0); // Do nothing
    }

  async ingresar() {
    const data = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    };
    if (!this.form.invalid) {
      (await this.loading).present();
      const info = await this.tokenService.loguearse(data)
        .subscribe(async (res: any) => {
          if(res.users) {
            const users = res.users;
            const usuario = users.find(
              (item: any) => ((item.user === data.email || item.email === data.email) && item.password === data.password)
            );
            if(usuario) {
              this.menu.enable(true);
              (await this.loading).dismiss();
              localStorage.setItem('token',usuario.token);
              localStorage.setItem('name',usuario.Usuario);
              localStorage.setItem('lastnames',usuario.lastnames);
              await this.router.navigate(['/home']);
            } else {
              this.alertMessage('Por favor verifique sus datos de usuario.');
            }
          } else {
            this.alertMessage('Error al traer información del servidor');
          }
        });
    }
  }

  async alertMessage(msg: string) {
    const alert = await this.alert.create({
      header: 'ERROR AL INGRESAR',
      message: msg+'.',
      buttons: ['Aceptar']
    });
    await alert.present();
  }


  ionViewDidEnter(): void {
    this.menu.enable(false);
   }

  // ionViewDidLeave(): void {
  //   this.menu.enable(true);
  // }

}
