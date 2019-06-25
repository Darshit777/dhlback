import { Component, OnInit } from '@angular/core';
import { User } from '../models/UserLogin';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {
  private pendingRequests:any[]=[{userName:"darshit",project:"ssa"},{userName:"aaa",project:"dw"}];
  private approvedRequets:User[]=[];


  constructor() { }
  approveRequest(user:any){
    console.log(user);
  }
  denyRequest(user:any){
    console.log(user)
  }

  ngOnInit() {
  }

}
