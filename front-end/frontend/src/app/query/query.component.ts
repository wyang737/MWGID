import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  returnValue: any = {
    "transactions":[
      {
        "userid":"NileshMukherji",
        "recipid": "WinstonYang",
        "data": "PAID 100"
      },
      {
        "userid":"NileshMukherji",
        "recipid": "BrianGuo",
        "data": "PROVIDED PENILE EXAM"
      },
      {
        "userid":"BrianGuo",
        "recipid": "NileshMukherji",
        "data": "PAID 150"
      },
    ]
  }

  formSubmit = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(JSON.stringify(form));
    this.formSubmit = true;
  } 

}
