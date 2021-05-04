import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
