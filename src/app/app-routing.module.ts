import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { RiderComponent } from './rider/rider.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: '', loadChildren: () => import('./user/user.module').then((m) => m.UserModule)},
  { path: 'company',  loadChildren: () => import('./company/company.module').then((m) => m.CompanyModule)},
  { path: 'rider', loadChildren: () => import('./rider/rider.module').then((m) => m.RiderModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
