import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./views/customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'cities',
    loadChildren: () => import('./views/cities/cities.module').then( m => m.CitiesPageModule)
  },
  {
    path: 'city/:id',
    loadChildren: () => import('./views/city/city.module').then( m => m.CityPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'userslist',
    loadChildren: () => import('./views/userslist/userslist.module').then( m => m.UserslistPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./views/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'scann-qr',
    loadChildren: () => import('./views/scann-qr/scann-qr.module').then( m => m.ScannQrPageModule)
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./views/geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },
  {
    path: 'recuperar-password',
    loadChildren: () => import('./views/recuperar-password/recuperar-password.module').then( m => m.RecuperarPasswordPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./views/map/map.module').then( m => m.MapPageModule)
  },  {
    path: 'location-map',
    loadChildren: () => import('./views/location-map/location-map.module').then( m => m.LocationMapPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
