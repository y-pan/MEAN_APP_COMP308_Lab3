import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { ConfigService } from '../../services/config.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn:boolean;
  myCourses:any;
  allCourses:any;
  err:string;

  @Output() onFilter:EventEmitter<any> = new EventEmitter(); /** all for messaging to tell components to react upon messages */

  constructor(
    private configService:ConfigService
    , private messageService:MessageService
    , private dataService:DataService
  ) { 
    
      this.messageService.listen().subscribe((msg:any)=>{
        switch(msg){
          case this.configService.MSG_USER_LOGGEDOUT:
            this.doAfterLoggedOut();break;
          case this.configService.MSG_USER_LOGGEDIN:
            this.doAfterLoggedIn();break;
        }
      })
    
  }

  ngOnInit() {
    this.err = "";
    this.checkIfLogin();
  }
  
  private checkIfLogin(){
    /** here might need to check with server ??? */
    this.logout();// log use out
    // this.login();  // log user in
    
  }


  private login(){/** This method logs user in */
    this.messageService.filter(this.configService.MSG_USER_LOGGEDIN);
    this.isLoggedIn = true;
  }

  private logout(){/** This method logs user out */
    
    this.messageService.filter(this.configService.MSG_USER_LOGGEDOUT);
    this.isLoggedIn = false;
    this.dataService.setStudent(null);

    this.messageService.filter(this.configService.MSG_SHOW_LOGIN);
    /** also need to clear local session ??? */
  }
  doAfterLoggedIn(){
    this.isLoggedIn = true;
  }
  doAfterLoggedOut(){
    this.isLoggedIn = false;
  }
  showSignUp(){
    console.log("show showSignUp")
    this.messageService.filter(this.configService.MSG_SHOW_SIGNUP);
  }
  showLogin(){
    console.log("show showLogin")
    this.messageService.filter(this.configService.MSG_SHOW_LOGIN);
  }

  getMyCourses(){
    this.messageService.filter(this.configService.MSG_SHOW_MYCOURSES);  
  }

  getAllCourses(){
    this.messageService.filter(this.configService.MSG_SHOW_COURSES);
  }
  showHome(){
    this.messageService.filter(this.configService.MSG_SHOW_PROFILE);
  }
}
