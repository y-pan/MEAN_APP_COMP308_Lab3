import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MessageService } from '../../services/message.service';
import { ConfigService } from '../../services/config.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  toDisplayLogin:boolean;
  credential:Credential;
  loginErr:string;
  constructor(
    private configService:ConfigService
    , private dataService:DataService
    , private messageService:MessageService) {
    
    this.messageService.listen().subscribe((msg:any)=>{
      switch(msg){
        // case this.configService.MSG_USER_LOGGEDOUT:
        //   this.display(true);break;
        // case this.configService.MSG_USER_LOGGEDIN:
        //   this.display(false);break;
        case this.configService.MSG_SHOW_LOGIN:
          this.display(true); break;
        // case this.configService.MSG_SHOW_SIGNUP:
        //   this.display(false);break;
        default:
          this.display(false); break;
      }

    })
   }

  ngOnInit() {
    // console.log("ng login compoment/ngOnInit...")
    // this.dataService.login("300823010", "Aa!123456").subscribe(data => {
    //   console.log("looks like login works...")
    //   console.log(data['data']['_id'])
    // });
    this.display(true);
    this.credential = {
      studentnumber:""
      ,password:""
    }
    this.loginErr = "";

    this.mock_cred();
  }
  display(toDisplay:boolean){
    this.toDisplayLogin = toDisplay;
  }

  mock_cred(){
    this.credential = {
      studentnumber:"300823057"
      , password:"Aa!123456"
    }
  }
  onSubmit(){
    // console.log(this.credential);
    this.dataService.login(this.credential.studentnumber, this.credential.password).subscribe(data =>{
      // console.log("attempted login...")
      // console.log(data);
      this.loginErr = data["err"];
      this.dataService.setStudent(data["data"]);
      
      if(data["data"]){
        this.messageService.filter(this.configService.MSG_USER_LOGGEDIN);
        this.messageService.filter(this.configService.MSG_SHOW_PROFILE);
      }
    })
  }
}


interface Credential{
  studentnumber:string;
  password:string;
}