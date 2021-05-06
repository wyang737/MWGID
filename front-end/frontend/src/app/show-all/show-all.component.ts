import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.scss']
})
export class ShowAllComponent implements OnInit {

  @ViewChild('grantAccessForm', {static: false}) grantAccessForm: NgForm;
  datamodel = {
    "userid":""
  }

  transaction: any;

  returnValue: any;

  formSubmit = false;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    var url: string = "/api/queryall";
    this.returnValue = this.http.get<Transaction>(url).subscribe(
      (data)=>this.transaction = data
    );
  }

}
export interface Transaction
{
  _id: string;
  userID: string;
  recipientID: string;
  data: string;
}
