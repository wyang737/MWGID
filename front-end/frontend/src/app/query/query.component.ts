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
    this.returnValue = this.http.get("http://localhost:8080/queryAll", form).subscribe();
    this.formSubmit = true;
  } 

}
