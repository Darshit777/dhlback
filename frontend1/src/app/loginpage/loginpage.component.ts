import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl ,ReactiveFormsModule} from '@angular/forms';
import { LoginService } from './login.service';
import { User } from '../models/UserLogin';
import { Router} from '@angular/router';
import { UserStart } from '../models/UserStart'


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
 
  private user:UserStart;
  private loginForm:FormGroup;
  private response:String;
  
  

  constructor(private loginservice:LoginService,private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }
  login(){
    console.log(this.loginForm.value);
    this.user=this.loginForm.value;
    console.log(this.user)
    this.loginservice.login(this.user).subscribe((data) =>JSON.stringify(data))
    console.log(this.response);
    

  }

}
