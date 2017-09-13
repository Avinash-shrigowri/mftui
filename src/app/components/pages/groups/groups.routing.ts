import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './groups.component';
import { GrouplistComponent } from './components/grouplist/grouplist.component';
import { GroupfilesComponent } from './components/groupfiles/groupfiles.component';
import { MembersComponent } from './components/members/members.component';
const routes: Routes = [{
        path: '',
        component: GroupsComponent,

        children: [
                 { path: '', component: GrouplistComponent},
                { path: 'grouplist',  component: GrouplistComponent},
                { path: 'groupfiles/:id', component: GroupfilesComponent},
                { path: 'members/:id',    component: MembersComponent}
        ]
}];
export const routing = RouterModule.forChild(routes);