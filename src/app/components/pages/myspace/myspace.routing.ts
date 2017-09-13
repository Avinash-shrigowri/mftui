import { RouterModule, Routes } from '@angular/router';
import {MyspaceComponent} from './myspace.component';
import { MyfilesComponent } from './components/myfiles/myfiles.component';

const routes: Routes = [{
        path: '',
        component: MyspaceComponent,
           children: [
                 { path: '', component: MyfilesComponent},
                { path: 'myspace',  component: MyfilesComponent},
        ] 
        
}];
export const routing = RouterModule.forChild(routes);