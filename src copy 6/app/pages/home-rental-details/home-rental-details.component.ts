import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

import { FileUploader, FileUploadModule } from 'ng2-file-upload';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'home-rental-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, FileUploadModule, ReactiveFormsModule],
  templateUrl: './home-rental-details.component.html',
  styleUrl: './home-rental-details.component.scss',
})
export class HomeRentalDetailsComponent {
  URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
  uploader:FileUploader;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response: string;

  

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
export interface AddCustomerDetailsModel {
  name:string,
  email:string,
  region:string,
  country:string
}
export const PinModalDetail = {
  title: 'Add Pin',
  pinFormFields: [
    {
      type: 'input',
      label: 'Title',
      placeholder: 'Enter Title',
      id: 'title',
      control: 'title',
      errorMessage:'Please provide a valide title.',
      required:true
      
    },
    {
      type: 'image',
      label: 'Choose or Drag & Drop image file here',
      placeholder: 'Select Image',
      id:'image',
      control:'pinImage',
      multiSelect: false,
      errorMessage:'Please select image.',
      required:false
    },
    {
      type: 'select',
      label: 'Select Collaboratory',
      placeholder: 'Select Collaboratory',
      id:'collaboratory',
      multiSelect:true,
      control:'collaboratory',
      errorMessage:'Please select Collaboratory from list.',
      required:true
    },
    {
      type: 'radio',
      label: 'Privacy',
      id:'privacy',
      control:'privacy',
      radioButtons: ['Private', 'Public'],
      errorMessage:"Select any one of them.",
      required:true
    },
  ],
  buttonText:'Create Pin'
};
