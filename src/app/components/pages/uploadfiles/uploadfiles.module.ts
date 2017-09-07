import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms'; 
import { UploadfilesComponent } from './uploadfiles.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { TreeView } from './components/vtree/vtree.component';
import { TreeViewService } from './components/vtree/vtree.service';
import {routing} from './uploadfiles.routing';
import { TreeModule } from 'ng2-tree';
import { CollapseModule, ModalModule, TooltipModule,BsDropdownModule  } from 'ngx-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    TreeModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
    
  ],
  declarations: [UploadfilesComponent, SidebarComponent, ExplorerComponent,TreeView],
  providers:[TreeViewService]
})
export class UploadfilesModule { }
