import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { NgProgressService } from "ng2-progressbar";
import { ToasterService } from 'angular2-toaster';
import { LoginService } from './login.service';
import { HttpClient } from '../../services/http.service';
import {RegisterModel, LoginModel}from'./login.model';
@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class Login implements OnInit {

    private localStorage: LocalStorageService;
    public logintoggle: boolean = true;
    public registermodel = new RegisterModel();
    public loginmodel = new LoginModel();
    constructor(private router: Router,  private loginservice: LoginService,private toasterService: ToasterService,private pService: NgProgressService,) {
        this.localStorage = new LocalStorageService();

    }

    ngOnInit() {
    
     }
        
    
    

    public togglereg() {
        this.logintoggle = !this.logintoggle;
    }

    public login(){
         
           this.pService.start();
          
        this.loginservice.postlogin(this.loginmodel).finally(()=>{this.pService.done();}).subscribe(
            response =>{
                      this.router.navigate(['pages/dashboard']); 
               this.toasterService.pop("success","Login Successfull");
            },
            error =>{
             this.toasterService.pop("error","Something Went Wrong Please try after sometime");
            });
       
    }

    public register(){
        //window.console.log(this.registermodel);
           this.pService.start();
        this.loginservice.postregister(this.registermodel).finally(()=>{this.pService.done();}).subscribe(
            response =>{
               this.toasterService.pop("success","Registration Successfull Please wait for admin approval");
            },
            error =>{
             this.toasterService.pop("error","Registration Successfull Please wait for admin approval");
            });

        }

    }
