import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  @ViewChild('grantAccessForm', {static: false}) grantAccessForm: NgForm;
  
  datamodel = {
    "userID":"",
    "recipID": "",
    "data":"",
    "notes":"",
  }

  formSubmit=false;

  constructor(private http : HttpClient) { }


  ngOnInit(): void {
  }
  onSubmit(form){
    var url: string = "/api/insert";
    url = url + "?userID=" + this.datamodel.userID;
    url = url + "&recipID=" + this.datamodel.recipID;
    url = url + "&data=" + this.datamodel.data;
    // url = url + "&notes=" + this.datamodel.notes;
    this.http.get(url).subscribe();
    console.log("This works");
    this.formSubmit = true;
  } 
}