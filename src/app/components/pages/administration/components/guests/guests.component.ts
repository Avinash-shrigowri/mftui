import { Component, OnInit,ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { NgProgressService } from "ng2-progressbar";
import { ToasterService } from 'angular2-toaster';
import { AdministrationService } from '../../administration.service';
@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {
  public guestlist:any;

  @ViewChild('lgModal') lgModal;
  public guestmodel: any;
  constructor(private router:Router,  private administrationservice: AdministrationService, private pService: NgProgressService, private toasterService: ToasterService) { }

  ngOnInit() {
    this.getallguest();
    this.guestmodel={
      firstName:'',
      mail:''
    }
  }
private getallguest() {
    this.pService.start();
    this.administrationservice.getguests().finally(() => { this.pService.done(); }).subscribe(
      response => {
        this.guestlist = response;
      },
      error => {

      });
  }
    public add(){
      this.lgModal.show();
    }

    public addguest() {

    this.administrationservice.addingguest(this.guestmodel).finally(() => { }).subscribe(
      response => {
        this.getallguest();
        this.toasterService.pop("success", "Success", "Added Successfully");
      },
      error => {
        this.toasterService.pop("error", "Error", "Something Went Wrong");
      });
  }
}
