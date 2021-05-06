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
    "senderID": "",
    "recipID": "",
    "data": ""
  }

  constructor(private http : HttpClient) { }

  data = {
    "senderID": "asdf",
    "recipID": "asdfasdfsdfsd",
    "data": "hjgfhj"
  }
  ngOnInit(): void {
  }
  onSubmit(form){
    this.http.post("http://localhost:8080/insert", form).subscribe();
    this.http.post("http://localhost:8080/insert", this.data).subscribe();
  } 
}