import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { Ng2Webstorage } from 'ngx-webstorage';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AppConstants } from './app.constants';
import { NgProgressModule } from "ng2-progressbar";
import { HttpClient } from './services/http.service';
import { SharedService } from './services/shared.service';
import { Login } from './components/login/login.component';
import { LoginService } from './components/login/login.service';
import { EllipsisPipe } from 'app/pipes/ellipsis.pipe';
import { FilesizePipe } from 'app/pipes/filesize.pipe';


@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ToasterModule,
    NgProgressModule,
    Ng2Webstorage
 
  ],
  declarations: [
    AppComponent,
    EllipsisPipe,
    Login,
    FilesizePipe,  
  ],
  providers: [
    AppConstants,
    HttpClient,
    SharedService,
    ToasterService,
    LoginService,
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
