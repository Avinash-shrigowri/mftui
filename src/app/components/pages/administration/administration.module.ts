import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms'; 
import { CollapseModule, ModalModule, TooltipModule,BsDropdownModule  } from 'ngx-bootstrap';
import {AdministrationComponent}from './administration.component';
import { GuestsComponent } from './components/guests/guests.component';
import { ContactlistComponent } from './components/contactlist/contactlist.component';
import {routing} from './administration.routing';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [ AdministrationComponent,GuestsComponent, ContactlistComponent]
})
export class AdministrationModule { }
