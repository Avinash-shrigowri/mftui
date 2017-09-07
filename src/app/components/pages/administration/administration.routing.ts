import { RouterModule, Routes } from '@angular/router';
import {AdministrationComponent}from './administration.component';
import { GuestsComponent } from './components/guests/guests.component';
import { ContactlistComponent } from './components/contactlist/contactlist.component';
const routes: Routes = [{
        path: '',
        component: AdministrationComponent,

        children: [
                 { path: '', component: ContactlistComponent},
                { path: 'contactlist',  component: ContactlistComponent},
                { path: 'guestlist', component: GuestsComponent},
        ]
}];
export const routing = RouterModule.forChild(routes);