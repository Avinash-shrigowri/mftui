import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms'; 
import {DataSource} from '@angular/cdk';
import {MdPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { GroupsComponent} from './groups.component';
import { CollapseModule, ModalModule, TooltipModule,BsDropdownModule  } from 'ngx-bootstrap';
import {MdToolbarModule, MdCardModule, MdRadioModule, MdInputModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
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
    routing,
    MdCardModule, MdRadioModule, MdInputModule, MdButtonModule, MdCheckboxModule,MdToolbarModule
  ],
  declarations: [GrouplistComponent,GroupsComponent, GroupfilesComponent, MembersComponent],
  providers:[]
})
export class GroupsModule { }
