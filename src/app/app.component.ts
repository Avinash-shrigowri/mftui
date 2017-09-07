import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <toaster-container></toaster-container>
   <ng-progress [positionUsing]="'marginLeft'" [minimum]="0.15" [maximum]="1"
             [speed]="'200'" [showSpinner]="'true'" [direction]="'leftToRightIncreased'"
             [color]="'#009688'" [trickleSpeed]="250" [thick]="true" [ease]="'linear'"
></ng-progress>
  <router-outlet></router-outlet>`,
 
})
export class AppComponent {

  constructor ( ){}

  ngOnInit(){
    
    
  }
}
