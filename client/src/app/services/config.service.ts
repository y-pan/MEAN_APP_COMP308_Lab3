import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {


  MSG_ON_NAV_HOME: any = "onNavHome";
  MSG_ON_NAV_LOGIN: any = "onNavLogin";
  MSG_ON_NAV_SIGNUP: any = "onNavSignUp";
  MSG_ON_NAV_MYCOURSES: any = "onNavMyCourses";
  MSG_ON_NAV_ALLCOURSES: any = "onNavAllCourses";
  
  MSG_SHOW_MYCOURSES: string = "showMyCourses"; /** show user's couress */
  MSG_SHOW_PROFILE: string = "showUserProfile"; /** show user profile like name, email,... */
  MSG_SHOW_LOGIN:string = "showLoginForm";
  MSG_SHOW_SIGNUP:string = "showSignUpForm";
  
  MSG_USER_LOGGEDIN:string = "loggedIn";
  MSG_USER_LOGGEDOUT:string = "loggedOut";
  MSG_HIDE_COURSES: string = "hideAllCourses";
  MSG_SHOW_COURSES: string = "showAllCourses"; /** all courses for everyone */

  constructor() { }

  // public methods for caller
  getCourses(){}

  // private helper mothers
  private getApi(){
    return "";
  }

}
