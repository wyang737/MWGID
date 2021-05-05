import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  @ViewChild('grantAccessForm', {static: false}) grantAccessForm: NgForm;
  
  datamodel = {
    "userid":"",
    "recipientid": "",
    "data":""
  }

  constructor() { 
    
  }

  ngOnInit(): void {
  }
  onSubmit(form){
    console.log(JSON.stringify(form));
  } 
}


