import { ElementRef, NgZone, OnInit, ViewChild,Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { NgProgressService } from "ng2-progressbar";
import { ToasterService } from 'angular2-toaster';
import { ConfirmationService } from './confirmation.service';
import { HttpClient } from '../../services/http.service';
import { Organiztation,User,ConfirmationModel } from'./confirmation.model';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'confirmation',
  templateUrl: './confirmation.html',
  styleUrls: ['./confirmation.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class Confirmation implements OnInit {

  constructor(private mapsAPILoader: MapsAPILoader,private ngZone: NgZone,private pService: NgProgressService,private router: Router,
               private confirmationservice: ConfirmationService,private toasterService: ToasterService ) {}
   
  @ViewChild("search")
  public searchElementRef: ElementRef;
  public confirmModel = new ConfirmationModel();

  public register(){
    this.pService.start();
    this.confirmationservice.postConfirmation(this.confirmModel).finally(()=>{this.pService.done();}).subscribe(
      response =>{
        this.router.navigate(['pages/login']); 
        this.toasterService.pop("success","Organisation Created Successfull");
      },
      error =>{
        this.toasterService.pop("error","Something Went Wrong Please try after sometime");
      }
    );      
  }
  
  ngOnInit() {
    
    this.confirmModel.user1dto = new User();
    this.confirmModel.organizationdto = new Organiztation();
    this.confirmModel.user1dto.salutaion = "Mr";
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.confirmModel.organizationdto.latitude = place.geometry.location.lat();
          this.confirmModel.organizationdto.longitude = place.geometry.location.lng();
          this.confirmModel.organizationdto.location = place.formatted_address;
        });
      });
    });

  }

}
