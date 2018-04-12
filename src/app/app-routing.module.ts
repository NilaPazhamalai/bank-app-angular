import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountListComponent } from './account/account-list/account-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'accounts', component: AccountListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { enableTracing: true }) // <-- debugging purposes only)
     ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
