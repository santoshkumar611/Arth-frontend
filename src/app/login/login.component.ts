import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginToggle = true;
  loginForm: FormGroup;
  signupForm:FormGroup;
  constructor(private route: ActivatedRoute,private _fb:FormBuilder) {
    this.route.params.subscribe((params:any)=>{
      if(params.toggleData == "true")
      {
        this.loginToggle = true;
      } 
      else{
        this.loginToggle = false;
      }  
    })

    this.loginForm = this._fb.group({
      email: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required)
    })
    this.signupForm = this._fb.group({
      email: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required),
      confirmPassword: new FormControl(null,Validators.required)
    })
  }

  ngOnInit() {
  }
  toggleLogin(){
    this.loginToggle = false;
  }

  login(form){
    if(form.valid){

    }
    else{
      this.setFormTouched(form);
    }
  }
  signup(form){
    if(form.valid){

    }
    else{
      this.setFormTouched(form);
    }
  }
  setFormTouched(form_obj: any) {
    Object.keys(form_obj.controls).forEach(field => {
      const control = form_obj.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
