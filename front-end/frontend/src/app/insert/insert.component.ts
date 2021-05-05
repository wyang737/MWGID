import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  @ViewChild('grantAccessForm', {static: false}) grantAccessForm: NgForm;
  dataModel: any = {};

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form){
    console.log(form);
  } 
}

/*
export class InsertComponent implements OnInit {
	SERVER_URL = "http://localhost:4200/insert";
	form: FormGroup;
  constructor(private FormBuilder: FormBuilder) {
  	this.form = this.FormBuilder.group({
  		data: ['']
  	})
   }

  ngOnInit(){
  }
  uploadText(event){
  	const text = (event.target as HTMLInputElement)
  }
  submitForm(){
  	var formData: any = new FormData()
  	formData.append("userid", this.form.get('userid').value);
  	formData.append("recipid", this.form.get('recipid').value);
  	formData.append("data", this.form.get('data').value);
  	this.http.post('')
  }
}
<<<<<<< HEAD:Front-End/frontend/src/app/insert/insert.component.ts
*/
=======
*/
>>>>>>> 50685ea3397221a7d20d2227c9c447f28265103e:front-end/frontend/src/app/insert/insert.component.ts
