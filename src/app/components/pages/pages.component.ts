import { Component, OnInit, Renderer } from '@angular/core';
import {Admin } from './menu/admin';
import { ProductAdmin } from './menu/productadmin';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  public toggleState = false;
  public isCollapsed: boolean = true;
  public menuitems: Object;
  public pagename:string="Dashboard";
  constructor(private renderer: Renderer, private superadmin:Admin, private productadmin:ProductAdmin) { }

  ngOnInit() {
    this.menuitems = this.superadmin.superadminmenu;
    //this.menuitems = this.productadmin.superadminmenu;
  }
  public setHeight(el, height) {
    this.renderer.setElementStyle(el, 'height', height + 'px');
  }
  public onToggle(toggleState: boolean) {

    this.toggleState = !this.toggleState;
  }
public onTogglesub($event,item){
    $event=item;
  if (!$event.item.expanded) {
        $event.item.expanded = true;
      }
     else {
      $event.item.expanded = !$event.item.expanded;
    
    }

}
public getitem(item){
  this.pagename=item.name;
}
}
