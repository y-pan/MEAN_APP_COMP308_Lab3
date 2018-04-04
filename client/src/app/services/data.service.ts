import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import {ConfigService} from './config.service'


@Injectable()
export class DataService {

  serverMode:number = 0; /** 0-heroku, 1-localhost */
  
  getServerRoot(serverMode:number){
    if(serverMode == 0){
      return "https://coursereg.herokuapp.com/";
    }else{
      return "http://localhost:8080/";
    }
  }
  registerCourse(studentId:string, courseId:string):any {
    let url = this.getServerRoot(this.serverMode) + "api/course/register";
    let headers:any = { headers: new Headers({ 'Content-Type': 'application/json' })};

    let body = {	
      "course_id":courseId,
      "student_id":studentId}
      // console.log("in DataService: body=" )
      // console.log(body);
    return this.http.post(url, JSON.stringify(body), headers).map((res:Response) => res.json());
    /** response is either: { "data": "OK"} or  { "err": "error in dropping course"}*/
  }
  dropCourse(studentId: string, courseId: string): any {
    let url:string = this.getServerRoot(this.serverMode) + "api/course/drop";
    let body = {
      "course_id":courseId,
      "student_id":studentId
    }
    let headers:any = { headers: new Headers({ 'Content-Type': 'application/json' })};
    return this.http.post(url, JSON.stringify(body), headers).map((res:Response) => res.json());
    /** response is either: { "data": "OK"} or  { "err": "error in dropping course"}*/
  }
  private student:Student;
  setStudent(student: any): any {
    this.student = student;
  }
  getStudent():any{
    return this.student;
  }
  constructor(public http:Http, private configService:ConfigService) {
    console.log('Data service is connected ... ');
    this.getCourses();
   }

  getCourses(){
    /** get all courses */
    let url:string = this.getServerRoot(this.serverMode) + "api/course/list";
    return this.http.get(url).map((res:Response) => res.json());
    // return this.http.get(url).map((res:Response) => {return res.json();});    // 
  }

  getMyCourses(_id:string){
    /** get my registered courses */
    let url:string = this.getServerRoot(this.serverMode) + "api/course/mylist/" + _id; /** _id is default _id in mongodb, not student number */
    return this.http.get(url).map((res:Response) => res.json());
  }

  login(studentnumber:string, password:string){
    // console.log("ng login: " + studentnumber + " | " + password);
    let url:string = this.getServerRoot(this.serverMode) + "api/student/login";
    let body = {"studentnumber": studentnumber, "password":password};
    return this.http.post(
      url,
      JSON.stringify(body)
      ,{ headers: new Headers({ 'Content-Type': 'application/json' }) }
    ).map((res:Response) => res.json());
  }

  signup(student){
    let url = this.getServerRoot(this.serverMode) + "api/student/signup";
    return this.http.post(
      url,
      JSON.stringify(student)
      ,{ headers: new Headers({ 'Content-Type': 'application/json' }) }
    ).map((res:Response) => res.json());
  }
}

interface Student{
  _id:string,
  courses: any,
  studentnumber: string,
  /* password: string,*/
  firstname: string,
  lastname: string,
  addresss: string,
  city: string,
  phone: string,
  email: string,
  program: string
}