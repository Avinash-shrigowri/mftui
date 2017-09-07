import { Component, OnInit,ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {
  @Output() onToggle = new EventEmitter<boolean>();
  menuToggle = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  public toggleMenu() {
    this.menuToggle = !this.menuToggle;
    this.onToggle.emit(this.menuToggle);
  }
}
