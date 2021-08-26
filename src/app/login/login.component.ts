import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: any;
  userNameForm: FormGroup
  constructor(private fb: FormBuilder) { 
    this.userNameForm = fb.group ({
      'userName': ['']
    });
    this.userName = this.userNameForm.controls['userName'];
  }

  ngOnInit(): void {
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  log(val) {
    console.log(val);
  }

}
