import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MyspaceService } from './myspace.service';
@Component({
  selector: 'app-myspace',
  template: `<router-outlet></router-outlet>`
 

})
export class MyspaceComponent implements OnInit {
  
  constructor() {

  }

  ngOnInit() {
  }
 
}

