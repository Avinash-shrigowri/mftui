
import { Injectable, Component } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class SharedService {
    private localStorage: LocalStorageService;
    public sharedgroupobj:any;
    constructor() {
        this.localStorage = new LocalStorageService();
       
        }

}
