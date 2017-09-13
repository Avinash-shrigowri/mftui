import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { NgProgressService } from "ng2-progressbar";
import { ToasterService } from 'angular2-toaster';
import { GroupsService } from '../../groups.service';
import { SharedService } from '../../../../../services/shared.service';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
   public members:any;
   public memberpayload:any;
  public Uuid:any;
  public Groupname:string;
   private parametersObservable: any;
  @ViewChild('lgModal') lgModal;
  @ViewChild('smModal') smModal;
  constructor(private router: Router,private route: ActivatedRoute, private sharedservice: SharedService, private groupservice: GroupsService,private localstorage:LocalStorageService, private pService: NgProgressService, private toasterService: ToasterService) { }

  ngOnInit() {
     this.Groupname= this.localstorage.retrieve('groupname');
      this.parametersObservable = this.route.params.forEach(
        (params:Params)=>{
          this.Uuid=params['id'];
        });

      this.getallmembers(this.Uuid);
       this.memberpayload= {
         firstName:'',
         userMail:'',
         role:'',
         userDomainId:''
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
    this.groupservice.postmember(this.memberpayload, this.Uuid).finally(() => { this.pService.done(); }).subscribe(
      response => {
        this.getallmembers(this.Uuid);
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
    this.groupservice.deletemember(member,this.Uuid).finally(()=>{this.pService.done();}).subscribe(
      response => {
        this.getallmembers(this.Uuid);
        this.toasterService.pop("success", "success", "Member Deleted Successfully");
      },
      error => {
        this.toasterService.pop("error", "error", error.message);
        window.console.log(error);
      }
    );
    
  }
}
