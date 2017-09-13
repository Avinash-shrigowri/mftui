import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule, BsDropdownModule, TooltipModule } from 'ngx-bootstrap';
import { MdCardModule, MdRadioModule, MdInputModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { routing } from './pages.routing';
import { PagesComponent } from './pages.component';
import { Admin } from './menu/admin';
import { ProductAdmin } from './menu/productadmin';
import { MyspaceService } from './myspace/myspace.service';
import { AdministrationService } from './administration/administration.service';
import { GroupsService } from './groups/groups.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    MdCardModule,
    MdRadioModule,
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
  ],
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,



  ],
  providers: [Admin, ProductAdmin, MyspaceService, GroupsService, AdministrationService]
})
export class PagesModule { }
