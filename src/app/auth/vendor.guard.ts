import { Injectable , Component } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
 
@Injectable()
export class VendorGuard implements CanActivate {

    private localStorage: LocalStorageService;
 
    constructor(private router: Router) {
        this.localStorage = new LocalStorageService();
     }
 
    canActivate() {
        // if (this.localStorage.retrieve('authToken') && this.localStorage.retrieve('vendorrole')=='Vendor') {
        //     // logged in so return true
            return true;
        //}
 
        // not logged in so redirect to login page
        //this.router.navigate(['/']);
        //return false;
    }
}
