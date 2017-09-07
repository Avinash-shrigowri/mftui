import { Component, OnInit } from '@angular/core';
import { UploadfileService } from '../../uploadfiles.service';
@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {
 
  constructor(private uploadfileService: UploadfileService) { }

  ngOnInit() {
  }
  
}
