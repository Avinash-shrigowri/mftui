import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UploadfileService } from './uploadfiles.service';
@Component({
  selector: 'app-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  styleUrls: ['./uploadfiles.component.scss'],

})
export class UploadfilesComponent implements OnInit {
  private filedata: File;
  constructor(private uploadfileService: UploadfileService) {

  }

  ngOnInit() {
  }
  public changeListener($event): void {

    let fileList: FileList = $event.target.files;

    if (fileList.length > 0) {
      this.filedata = fileList[0];
      window.console.log(this.filedata.size);

    }
  }

  public filesubmit() {
   
    this.uploadfileService.postfile(this.filedata).finally(() => { }).subscribe(
      response => {
      },
      error => {
       window.console.log(error);
      }
    );
  }
}

