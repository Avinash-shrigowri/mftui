import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgProgressService } from "ng2-progressbar";
import { LocalStorageService } from 'ngx-webstorage';
import { ToasterService } from 'angular2-toaster';
import { GroupsService } from '../../groups.service';
import { SharedService } from '../../../../../services/shared.service';
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
  public Uuid: any;
  public Groupname:string;
  private parametersObservable: any;

  //public editfiledata:any;
  constructor(private router: Router, private route: ActivatedRoute, private sharedservice: SharedService, private groupservice: GroupsService, private pService: NgProgressService, private toasterService: ToasterService,private localstorage:LocalStorageService) { }

  ngOnInit() {
    this.Groupname= this.localstorage.retrieve('groupname');
    this.parametersObservable = this.route.params.forEach(
      (params: Params) => {
        this.Uuid = params["id"];

      });
    this.entries(this.Uuid);
    // if (this.sharedservice.sharedgroupobj) {
    //   this.entries(this.sharedservice.sharedgroupobj.uuid);
    // }
    // else {
    //   this.router.navigate(['pages/groups']);
    // }
  }
  private entries(data) {
    this.pService.start();
    this.groupservice.getentries(data).finally(() => { this.pService.done(); }).subscribe(
      response => {
        if (Array.isArray(response)) {

          response.forEach(element => {
            element['filetype'] = element['name'].split(".").pop();
          });
          this.files = response;
          window.console.log(this.files);
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
    this.groupservice.postfile(this.filedata,this.Uuid).finally(() => { this.pService.done(); }).subscribe(
      response => {
        this.entries(this.Uuid);
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
    this.groupservice.deletefile(file.uuid, this.Uuid).finally(() => { this.pService.done(); }).subscribe(
      response => {
        this.entries(this.Uuid);
        this.toasterService.pop("success", "success", "File Deleted Successfully");
      },
      error => {
        this.toasterService.pop("error", "error", "something went Wrong");
        window.console.log(error);
      }
    );
  }
  public rename(file) {
    this.editfile = file;
    this.smModal.show();
  }

  public renamefilename() {
    this.pService.start();
    delete (this.editfile['filetype']);
    this.groupservice.renamefile(this.editfile, this.Uuid).finally(() => { this.pService.done(); }).subscribe(
      response => {
        this.toasterService.pop("success", "Success", "File Name Changed Successfully");
        this.entries(this.Uuid);
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
