import { Component, OnInit, ViewChild } from '@angular/core';
import { MyspaceService } from '../../myspace.service';
import { AppConstants } from '../../../../../app.constants';
import { NgProgressService } from "ng2-progressbar";
import { ToasterService } from 'angular2-toaster';
import { FilesizePipe } from 'app/pipes/filesize.pipe';

import 'rxjs/Rx';
@Component({
  selector: 'app-myfiles',
  templateUrl: './myfiles.component.html',
  styleUrls: ['./myfiles.component.scss']
})
export class MyfilesComponent implements OnInit {
  sampleNodes: any[];
  public documents: any;
  public selectedDocument: any;
  public isDetailShown: boolean = false;
  public document: any;
  @ViewChild('lgModal') lgModal;
  @ViewChild('smModal') smModal;
  public editfile: Object;
  public renameobj: Object;
  private filedata: File;
  
  constructor(private myspaceervice: MyspaceService, private toasterService: ToasterService, private pService: NgProgressService,private constants: AppConstants) { }

  ngOnInit() {
    this.getdocuments();
  }

  private getdocuments() {
    this.pService.start();
    this.myspaceervice.getfile().finally(() => { this.pService.done(); }).subscribe(
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

  public getdocumenturl(document) {
    return '' + this.constants.baseUrl + this.constants.documents + document.uuid + this.constants.download;
  }

  public downloaddocument(document) {
    this.pService.start();
    this.myspaceervice.download(document).finally(() => { this.pService.done(); }).subscribe(
      response => {
         window.console.log("Response :",response);
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


  public filesubmit() {
    this.pService.start();
    this.myspaceervice.postfile(this.filedata).finally(() => { this.pService.done(); }).subscribe(
      response => {
        this.toasterService.pop("success", "Success", "File Uploaded Successfully");
        this.getdocuments();
        this.lgModal.hide();
      },
      error => {
        this.toasterService.pop("error", "Error", "Something Went Wrong");
        window.console.log(error);
        this.lgModal.hide();
      }
    );
  }
  public updatefile() {
    this.pService.start();
    this.myspaceervice.editfile(this.filedata, this.editfile).finally(() => { this.pService.done(); }).subscribe(
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

  public rename(document) {


    this.document = document;

    this.smModal.show();
  }

  public renamefilename() {
    this.pService.start();
    delete (this.document['filetype']);
    this.myspaceervice.renamefile(this.document).finally(() => { this.pService.done(); }).subscribe(
      response => {
        this.toasterService.pop("success", "Success", "File Name Changed Successfully");
        this.getdocuments();
        this.smModal.hide();
      },
      error => {
        this.toasterService.pop("error", "Error", "Something Went Wrong");
        window.console.log(error);
           this.smModal.hide();
      }
    );
  }
  public showDetails(document) {
    this.selectedDocument = document;
    this.isDetailShown = true;
  }
  public hideDetails() {    
    this.isDetailShown = false;
  }
  public delete(document) {
    this.pService.start();
    this.myspaceervice.deletefile(document).finally(() => { this.pService.done(); }).subscribe(
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


