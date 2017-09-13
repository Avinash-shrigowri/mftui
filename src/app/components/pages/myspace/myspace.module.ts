import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms'; 
import { MyspaceComponent } from './myspace.component';
import {routing} from './myspace.routing';
import { CollapseModule, ModalModule, TooltipModule,BsDropdownModule  } from 'ngx-bootstrap';
import {MdToolbarModule, MdCardModule, MdRadioModule, MdInputModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MyfilesComponent } from './components/myfiles/myfiles.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    MdToolbarModule, MdCardModule, MdRadioModule, MdInputModule, MdButtonModule, MdCheckboxModule
    
  ],
  declarations: [MyspaceComponent, MyfilesComponent],
  providers:[]
})
export class MyspaceModule { }
