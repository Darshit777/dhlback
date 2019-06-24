import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl ,ReactiveFormsModule} from '@angular/forms';
import { LoginService } from './login.service';
import { User } from '../models/UserLogin'

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
 
  
  private loginForm:FormGroup;
  
  login(){
    console.log(this.loginForm.value);
    

  }

  constructor(private loginservice:LoginService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }

}
