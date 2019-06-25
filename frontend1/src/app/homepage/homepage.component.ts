import { Component, OnInit } from '@angular/core';
import  {Router} from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl ,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  projectList:string[]=["AP-Portal","Mercury","Mirror","Connect","Retail"];
  private projectForm:FormGroup;
  private requestRaiseFlag:boolean=false;
  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      name:['',Validators.required],
      password:['N',],
      email: ['', Validators.required ],
      project: ['', Validators.required],
      accessType:['User']
    });
  }

  raiseRequest(){
    console.log(this.projectForm.value);
    this.requestRaiseFlag=true;
  }

}
