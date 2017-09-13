import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Login} from './components/login/login.component';
const routes: Routes = [
                   { path: '', redirectTo: 'login', pathMatch: 'full' },  
                    { path: 'login', component:Login },
                    {path:'pages', loadChildren:'app/components/pages/pages.module#PagesModule'} 
             ];

@NgModule({
  imports: [ RouterModule.forRoot(routes , { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}