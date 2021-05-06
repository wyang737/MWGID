import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  @ViewChild('grantAccessForm', {static: false}) grantAccessForm: NgForm;
  datamodel = {
    "userid":""
  }

  returnValue: any;

  formSubmit = false;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form){
    this.returnValue = this.http.get<Transaction>("http://localhost:8080/queryall").subscribe();
    console.log(this.returnValue);
    console.log("no subscribo: ");
    console.log(this.http.get<Transaction>("http://localhost:8080/queryall"));
    this.formSubmit = true;
  } 
}
export interface Transaction
{
  userID: string;
  recipientID: string;
  data: string;
}