import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./modules/authentication/authentication.module').then((x) => x.AuthenticationModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then((x) => x.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
