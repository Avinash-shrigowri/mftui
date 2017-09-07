import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgProgressService } from "ng2-progressbar";
import { ToasterService } from 'angular2-toaster';
import { GroupsService } from '../../groups.service';
import { CommonService } from '../../../../../services/common.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-groupfiles',
  templateUrl: './groupfiles.component.html',
  styleUrls: ['./groupfiles.component.scss']
})
export class GroupfilesComponent implements OnInit {
  rootSubjectSubscription: Subscription;
  public GroupName: Object;
  public files: any;
  @ViewChild('lgModal') lgModal;
  @ViewChild('smModal') smModal;
  private filedata: File;
  public editfile: any;
  //public editfiledata:any;
  constructor(private router: Router, private sharedservice: CommonService, private groupservice: GroupsService, private pService: NgProgressService, private toasterService: ToasterService) { }

  ngOnInit() {
    // this.rootSubjectSubscription = this.groupservice.rootSubject$.subscribe((groupdata) => {
    //   this.GroupName = groupdata.name;
    //   this.entries(groupdata.uuid);
    // });
    if (this.sharedservice.sharedgroupobj) {
      this.entries(this.sharedservice.sharedgroupobj.uuid);
    }
    else {
      this.router.navigate(['pages/groups']);
    }
  }
  private entries(data) {
    this.pService.start();
    this.groupservice.getentries(data).finally(() => { this.pService.done(); }).subscribe(
      response => {
        if(Array.isArray(response)){
        
        response.forEach(element => {
          element['filetype']= element['name'].split(".").pop();
        });
        this.files = response;
        }
      },
      error => {

      });
  }
  public add() {
    
     
    this.lgModal.show();
  }

  public update(file) {
    // this.editfile = file;
    // this.lgModal.show();
  }
  public changeListener($event): void {

    let fileList: FileList = $event.target.files;

    if (fileList.length > 0) {
      this.filedata = fileList[0];
      window.console.log(this.filedata.size);

    }
  }

  public filesubmit() {
    this.pService.start();
    this.groupservice.postfile(this.filedata, this.sharedservice.sharedgroupobj.uuid).finally(() => { this.pService.done(); }).subscribe(
      response => {
        this.entries(this.sharedservice.sharedgroupobj.uuid);
        this.toasterService.pop("success", "success", "File Uploadded Successfully");
      },
      error => {
        this.toasterService.pop("error", "error", "something went Wrong");
        window.console.log(error);
      }
    );
  }

  public delete(file) {
    this.pService.start();
    this.groupservice.deletefile(file.uuid, this.sharedservice.sharedgroupobj.uuid).finally(() => { this.pService.done(); }).subscribe(
      response => {
        this.entries(this.sharedservice.sharedgroupobj.uuid);
        this.toasterService.pop("success", "success", "File Deleted Successfully");
      },
      error => {
        this.toasterService.pop("error", "error", "something went Wrong");
        window.console.log(error);
      }
    );
  }
 public rename(file){
     this.editfile=file;
       this.smModal.show();
  }

  public renamefilename() {
    this.pService.start();
   delete(this.editfile['filetype']);
    this.groupservice.renamefile( this.editfile,this.sharedservice.sharedgroupobj.uuid).finally(() => { this.pService.done();}).subscribe(
      response => {
         this.toasterService.pop("success", "Success", "File Name Changed Successfully");
          this.entries(this.sharedservice.sharedgroupobj.uuid);
      },
      error => {
        this.toasterService.pop("error", "Error", "Something Went Wrong");
       window.console.log(error);
      }
    );
  }
  // ngOnDestroy() {
  //   this.rootSubjectSubscription.unsubscribe();
  // }
}
