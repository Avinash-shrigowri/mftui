
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
const routes: Routes = [{
      path: '',
      component: PagesComponent,
      children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: 'app/components/pages/dashboard/dashboard.module#DashboardModule' },
            { path: 'uploadfiles', loadChildren: 'app/components/pages/uploadfiles/uploadfiles.module#UploadfilesModule' },
            { path: 'groups', loadChildren: 'app/components/pages/groups/groups.module#GroupsModule' },
            { path: 'administration', loadChildren: 'app/components/pages/administration/administration.module#AdministrationModule' },
      ]
}];


export const routing = RouterModule.forChild(routes);