import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgProgressService } from "ng2-progressbar";
import { ToasterService } from 'angular2-toaster';
import { LocalStorageService } from 'ngx-webstorage';
import { GroupsService } from '../../groups.service';
import { Subscription } from 'rxjs';
import { SharedService } from '../../../../../services/shared.service';

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.scss']
})
export class GrouplistComponent implements OnInit {
  public grouplists: any;
  public rootSubjectSubscription: Subscription;
  public   contenteditable:boolean = false;

  @ViewChild('lgModal') lgModal;
  public groupmodel: any;

  constructor(private router: Router, private sharedservice: SharedService, private groupservice: GroupsService, private pService: NgProgressService, private toasterService: ToasterService,private localstorage:LocalStorageService) { }

  ngOnInit() {
    this.getgrouplist();
    this.groupmodel = {
      creationDate: '',
      domain: '',
      externalMailLocale: '',
      locale: '',
      modificationDate: '',
      name: '',
      uuid: ''
    }
  }

  private getgrouplist() {
    this.pService.start();
    this.groupservice.getgroups().finally(() => { this.pService.done(); }).subscribe(
      response => {
        this.grouplists = response;
      },
      error => {

      });
  }
  public add() {

    this.groupmodel = {};
    this.lgModal.show();
  }
  public edit(contact) {
     // this.contenteditable=!this.contenteditable;
   this.groupmodel = contact;

   this.lgModal.show();
  }
  public adduser() {

    this.groupservice.addgroup(this.groupmodel).finally(() => { }).subscribe(
      response => {
        this.getgrouplist();
        this.toasterService.pop("success", "Success", "Added Successfully");
      },
      error => {
        this.toasterService.pop("error", "Error", "Something Went Wrong");
      });
  }



  public delete(document) {
    this.pService.start();
    this.groupservice.deletegroup(document).finally(() => { this.pService.done(); }).subscribe(
      response => {
        this.getgrouplist();
        this.toasterService.pop("success", "Success", "Deleted Successfully");
      },
      error => {
        this.toasterService.pop("error", "Error", "Something Went Wrong");
      }
    );
  }

  public view(group) {
    this.localstorage.store("groupname",group.name);
    this.router.navigate(['pages/groups/groupfiles',group.uuid]);
  }
  public member(group) {
   
    this.router.navigate(['pages/groups/members',group.uuid]);
  }
 private onRowClick(event, id){
    console.log(event.target.outerText, id);
     this.contenteditable=!this.contenteditable;
  }

}
