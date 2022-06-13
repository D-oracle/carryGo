import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: boolean = true;
  users(): void {
    this.user = true;
  }
  company(): void {
    this.user = false;
  }
  submit() {
    
  }
  userFormGroup = this._formBuilder.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', Validators.required],
  });
  settingsFormGroup = this._formBuilder.group({
    checkbox: ['', Validators.required],
  });
  riderFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  companyFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    registration: ['', Validators.required],
    tax: ['', Validators.required],
    logo: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', Validators.required],
  });
  isLinear = false;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
