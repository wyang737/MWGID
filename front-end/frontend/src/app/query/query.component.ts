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

  transaction: any;

  returnValue: any;

  formSubmit = false;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form){
    this.returnValue = this.http.get<Transaction>("/queryAll").subscribe(
      (data)=>this.transaction = data
    );
    console.log(this.transaction);
    console.log(this.returnValue);
    console.log("hi");
  } 
}
export interface Transaction
{
  _id: string;
  userID: string;
  recipientID: string;
  data: string;
}