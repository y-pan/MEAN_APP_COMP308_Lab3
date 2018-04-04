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
  displayNav:number;
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
          case this.configService.MSG_ON_NAV_HOME:
            this.displayNav = 0;
            break;
          case this.configService.MSG_ON_NAV_LOGIN:
            this.displayNav = -1;
            break;
          case this.configService.MSG_ON_NAV_SIGNUP:
            this.displayNav = -2;
            break;
          case this.configService.MSG_ON_NAV_MYCOURSES:
            this.displayNav = 1;
            break;
          case this.configService.MSG_ON_NAV_ALLCOURSES:
            this.displayNav = 2;
            break;  
        }
      })
    
  }

  
  ngOnInit() {
    this.err = "";
    this.checkIfLogin();
    this.displayNav = -1;
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
    if(confirm("Are you sure to logout?")){
      this.messageService.filter(this.configService.MSG_USER_LOGGEDOUT);
      this.isLoggedIn = false;
      this.dataService.setStudent(null);
  
      this.messageService.filter(this.configService.MSG_SHOW_LOGIN);
      /** also need to clear local session ??? */
    }
    
  }
  doAfterLoggedIn(){
    this.isLoggedIn = true;
    this.displayNav = 0;
  } 
  doAfterLoggedOut(){
    this.isLoggedIn = false;
    // this.messageService.filter(this.configService.MSG_ON_NAV_LOGIN);
    this.displayNav = -1;
  }
  showSignUp(){
    console.log("show showSignUp")
    this.messageService.filter(this.configService.MSG_SHOW_SIGNUP);
    // this.messageService.filter(this.configService.MSG_ON_NAV_SIGNUP);
    this.displayNav = -2;
  }
  showLogin(){
    console.log("show showLogin")
    this.messageService.filter(this.configService.MSG_SHOW_LOGIN);
    // this.messageService.filter(this.configService.MSG_ON_NAV_LOGIN);
    this.displayNav = -1;
  }

  getMyCourses(){
    this.messageService.filter(this.configService.MSG_SHOW_MYCOURSES);  
    // this.messageService.filter(this.configService.MSG_ON_NAV_MYCOURSES);
    this.displayNav = 1;
  }

  getAllCourses(){
    this.messageService.filter(this.configService.MSG_SHOW_COURSES);
    // this.messageService.filter(this.configService.MSG_ON_NAV_ALLCOURSES);
    this.displayNav = 2;
  }
  showHome(){
    this.messageService.filter(this.configService.MSG_SHOW_PROFILE);
    // this.messageService.filter(this.configService.MSG_ON_NAV_HOME);
    this.displayNav = 0;
  }
}
