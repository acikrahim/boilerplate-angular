import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then((x) => x.HomeModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./modules/authentication/authentication.module').then((x) => x.AuthenticationModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then((x) => x.AdminModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
