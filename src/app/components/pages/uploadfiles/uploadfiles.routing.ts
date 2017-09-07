import { RouterModule, Routes } from '@angular/router';
import { UploadfilesComponent } from './uploadfiles.component';

const routes: Routes = [{
        path: '',
        component: UploadfilesComponent
            
        
}];
export const routing = RouterModule.forChild(routes);