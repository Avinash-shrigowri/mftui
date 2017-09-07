import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule, BsDropdownModule, TooltipModule } from 'ngx-bootstrap';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { routing } from './pages.routing';
import {PagesComponent} from './pages.component';
import {Admin } from './menu/admin';
import {ProductAdmin } from './menu/productadmin';
import {UploadfileService} from './uploadfiles/uploadfiles.service';
import {AdministrationService} from './administration/administration.service';
import {GroupsService} from './groups/groups.service';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
   
   

  ],
  providers:[Admin,ProductAdmin,UploadfileService,GroupsService,AdministrationService]
})
export class PagesModule { }
