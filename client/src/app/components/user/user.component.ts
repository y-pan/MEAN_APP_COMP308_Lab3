import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MessageService } from '../../services/message.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:any;
  toDisplayProfile:boolean;
  text:string = "mytext"
  // myCourses:
  constructor(
    private configService:ConfigService
    , private messageService:MessageService
    , private dataService:DataService
  ) { 

    this.messageService.listen().subscribe((msg:any) =>{
      switch(msg){
        case this.configService.MSG_SHOW_PROFILE:
          this.display(true);break;
        default:
          this.display(false);break;
      }
    });
  }

  ngOnInit() {

  }

  display(toDisplay:boolean){
    this.toDisplayProfile = toDisplay;
    if(this.toDisplayProfile){
      // this.mock_user();
      this.user = this.dataService.getStudent();
    }
  }

  mock_user(){
    this.user = {}
    this.user.studentnumber = "300823005"
    this.user.password = "Aa!123456"
    this.user.firstname = "Firstname5"
    this.user.lastname = "Lastname5"
    this.user.address = "124 Main Ave"
    this.user.city = "Markham"
    this.user.phone = "6471112225"
    this.user.email = "email5@gmail.com"
    this.user.program = "Software Technology"
  }

}

// interface User{
//   studentnumber?:string;
//   password?:string;
//   firstname?:string;
//   lastname?:string;
//   address?:string;
//   city?:string;
//   phone?:string;
//   email?:string;
//   program?:string;
// }
