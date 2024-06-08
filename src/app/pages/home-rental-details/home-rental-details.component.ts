import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

import { FileUploader, FileUploadModule } from 'ng2-file-upload';


@Component({
  selector: 'home-rental-details',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home-rental-details.component.html',
  styleUrl: './home-rental-details.component.scss',
})
export class HomeRentalDetailsComponent {
  URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
  uploader:FileUploader;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;

  constructor(private _route: ActivatedRoute) {
    this.uploader = new FileUploader({
      url: this.URL,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item:any) => {
        return new Promise( (resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });
 
    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;
 
    this.response = '';
 
    this.uploader.response.subscribe( res => this.response = res );
    }

    public fileOverBase(e:any):void {
      this.hasBaseDropZoneOver = e;
    }
   
    public fileOverAnother(e:any):void {
      this.hasAnotherDropZoneOver = e;
    }

    
  chooseImage(uploadInpt:any){
    uploadInpt.click()
  }
  
    submitForm(){
      this.uploader.uploadAll();
    }  
}
