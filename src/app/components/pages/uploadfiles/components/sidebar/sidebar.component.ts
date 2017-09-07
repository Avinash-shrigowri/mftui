import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadfileService } from '../../uploadfiles.service';
import { NgProgressService } from "ng2-progressbar";
import { ToasterService } from 'angular2-toaster';
import 'rxjs/Rx';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sampleNodes: any[];
  public documents: any;
  public document: any;
  @ViewChild('lgModal') lgModal;
  @ViewChild('smModal') smModal;
  public editfile: Object;
  public renameobj:Object;
  private filedata:File;
  constructor(private uploadfileService: UploadfileService, private toasterService: ToasterService, private pService: NgProgressService) { }

  ngOnInit() {
    this.getdocuments();
    this.sampleNodes = [{
      selected: false,
      name: "as",
      class: "fa fa-folder",
      activeClass: "fa fa-folder-open",
      nodes: [{
        selected: false,
        name: "sadas",
        class: "fa fa-file",
        activeClass: "fa fa-file",
      }, {
        selected: false,
        name: "asas",
        class: "fa fa-file",
        activeClass: "fa fa-file",
      }]
    }, {
      selected: false,
      name: "sada",
      class: "fa fa-folder",
      activeClass: "fa fa-folder-open",
      nodes: [{
        selected: false,
        name: "sad",
        class: "fa fa-folder",
        activeClass: "fa fa-folder-open",
        nodes: [{
          selected: false,
          name: "sdsa",
          class: "fa fa-file",
          activeClass: "fa fa-file",
        }]
      }, {
        selected: false,
        name: "sd",
        class: "fa fa-file",
        activeClass: "fa fa-file",
      }]
    }];

    this.document={
      name:''
    };
  }

  private getdocuments() {
    this.pService.start();
    this.uploadfileService.getfile().finally(() => { this.pService.done(); }).subscribe(
      response => {
        if (Array.isArray(response)) {
          response.forEach(ele => {
            ele['filetype'] = ele['name'].split('.').pop();
          });
        }
        this.documents = response;
        window.console.log(this.documents);
      },
      error => {

      });
  }


  public downloaddocument(document) {
    this.pService.start();
    this.uploadfileService.download(document).finally(() => { this.pService.done(); }).subscribe(
      response => {
        

      },
      error => {
        window.console.log(error);
      });
  };


  public update(document) {
    this.lgModal.show();
    this.editfile = document;
  }

   public changeListener($event): void {

    let fileList: FileList = $event.target.files;

    if (fileList.length > 0) {
      this.filedata = fileList[0];
      window.console.log(this.filedata.size);

    }
  }

  public updatefile() {
    this.pService.start();
    this.uploadfileService.editfile(this.filedata, this.editfile).finally(() => { this.pService.done();}).subscribe(
      response => {
         this.toasterService.pop("success", "Success", "Updated Successfully");
          this.getdocuments();
      },
      error => {
        this.toasterService.pop("error", "Error", "Something Went Wrong");
       window.console.log(error);
      }
    );
  }

  public rename(document){
  
   
    this.document=document;

       this.smModal.show();
  }

  public renamefilename() {
    this.pService.start();
    delete(this.document['filetype']);
    this.uploadfileService.renamefile(this.document).finally(() => { this.pService.done();}).subscribe(
      response => {
         this.toasterService.pop("success", "Success", "File Name Changed Successfully");
          this.getdocuments();
      },
      error => {
        this.toasterService.pop("error", "Error", "Something Went Wrong");
       window.console.log(error);
      }
    );
  }
  public delete(document) {
    this.pService.start();
    this.uploadfileService.deletefile(document).finally(() => { this.pService.done(); }).subscribe(
      response => {
        this.getdocuments();
        this.toasterService.pop("success", "Success", "Deleted Successfully");
      },
      error => {
        this.toasterService.pop("error", "Error", "Something Went Wrong");
      }
    );
  }
  private downloadFile(data) {
    var blob = new Blob([data], { type: 'image/jpeg' });
    var url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}

