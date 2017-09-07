import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms'; 
import { GroupsComponent} from './groups.component';
import { CollapseModule, ModalModule, TooltipModule,BsDropdownModule  } from 'ngx-bootstrap';
import { GrouplistComponent } from './components/grouplist/grouplist.component';

import {routing} from './groups.routing';
import { GroupfilesComponent } from './components/groupfiles/groupfiles.component';
import { MembersComponent } from './components/members/members.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    routing
  ],
  declarations: [GrouplistComponent,GroupsComponent, GroupfilesComponent, MembersComponent],
  providers:[]
})
export class GroupsModule { }
