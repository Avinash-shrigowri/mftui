import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgProgressService } from "ng2-progressbar";
import { ToasterService } from 'angular2-toaster';
import { GroupsService } from '../../groups.service';
import { CommonService } from '../../../../../services/common.service';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
   public members:any;
   public memberpayload:any;
  @ViewChild('lgModal') lgModal;
  @ViewChild('smModal') smModal;
  constructor(private router: Router, private sharedservice: CommonService, private groupservice: GroupsService, private pService: NgProgressService, private toasterService: ToasterService) { }

  ngOnInit() {
   if (this.sharedservice.sharedgroupobj) {
      this.getallmembers(this.sharedservice.sharedgroupobj.uuid);
       this.memberpayload= {
         firstName:'',
         userMail:'',
         role:'',
         userDomainId:''
       }
    }
    else {
      this.router.navigate(['pages/groups']);
    }
 
  }
  private getallmembers(data) {
    this.pService.start();
    this.groupservice.getmembers(data).finally(() => { this.pService.done(); }).subscribe(
      response => {
        this.members = response;
      },
      error => {

      });
  }
    public add(){
       this.memberpayload={};
      this.lgModal.show();
    }

    public edit(member){
       this.memberpayload=member;
       this.lgModal.show();
    }

    public filesubmit() {
    this.pService.start();
    this.groupservice.postmember(this.memberpayload, this.sharedservice.sharedgroupobj.uuid).finally(() => { this.pService.done(); }).subscribe(
      response => {
        this.getallmembers(this.sharedservice.sharedgroupobj.uuid);
        this.toasterService.pop("success", "success", "Member added Successfully");
      },
      error => {
        this.toasterService.pop("error", "error", error.message);
        window.console.log(error);
      }
    );
  }

  public delete(member){
    this.pService.done()
    this.groupservice.deletemember(member,this.sharedservice.sharedgroupobj.uuid).finally(()=>{this.pService.done();}).subscribe(
      response => {
        this.getallmembers(this.sharedservice.sharedgroupobj.uuid);
        this.toasterService.pop("success", "success", "Member Deleted Successfully");
      },
      error => {
        this.toasterService.pop("error", "error", error.message);
        window.console.log(error);
      }
    );
    
  }
}
