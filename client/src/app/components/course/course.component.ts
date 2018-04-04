import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MessageService } from '../../services/message.service';
import { ConfigService } from '../../services/config.service';
import { ArrayContainsPipe } from '../../array-contains.pipe';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  // pipes:[ArrayContainsPipe]
})
export class CourseComponent implements OnInit {
  courses:Course[]
  course_debug:string = "course_debug"
  studentId:string;
  displayCourses:boolean;
  displayMyCourse:boolean;
  isEnabled:boolean;
  errorInCourse:string;

  constructor(
    private configService:ConfigService
    , private dataService:DataService
    , private messageService:MessageService) { 

    this.messageService.listen().subscribe((msg:any)=>{
      switch(msg){
        // case this.configService.MSG_USER_LOGGEDIN:
        //   this.enable(true);
        //   break;
        // case this.configService.MSG_USER_LOGGEDOUT:
        //   this.enable(false);
        //   break;
        case this.configService.MSG_SHOW_COURSES:
          this.display(true);
          break;
        // case this.configService.MSG_HIDE_COURSES:
        //   this.display(false);
        //   break;
        default:
          this.display(false);
          break;
      }
    });
  }

  ngOnInit() {
    console.log("course ngOnInt()...")
    this.courses = [];
    // this.mock_course();
    this.getCourses(); /** get all courses */
    
    
  }
  
  private enable(enabled:boolean){ /** enabled when logged in, disabled when logged out */
    this.isEnabled = enabled;
    if(!this.isEnabled){
      this.display(false);
    }
  }

  private display(toDisplay:boolean){
    this.displayCourses = toDisplay;
    this.displayMyCourse = toDisplay;
    
    // if(!this.isEnabled){return;}

    if(toDisplay){
      this.getCourses();
      // this.getMyCourses();
    }
  }

  private getCourses():void{ /** this is to get all courses from school, for all student to view */
    let student = this.dataService.getStudent()
    if(student){
      this.studentId = student._id;
      // console.log("get studentId!!!!!!!!!!!!!!: " + this.studentId)
    }else{
      this.studentId = "";
    }

    this.dataService.getCourses().subscribe((dataJson:Response) =>{
      this.courses = [];
      // console.log("course -> getCourse()")
      for (let i=0; i< dataJson["data"].length; i++){
        this.courses.push(dataJson["data"][i]);
      }
    });
  }

  registerCourse(course:any){
    if(confirm("Are you sure to register course: " +course.code + " - " + course.name + " (section " + course.section + ") ?")) {
      let student = this.dataService.getStudent();
      // console.log("student=" + student._id + " | course=" + courseId);
      this.dataService.registerCourse(student._id, course._id).subscribe(data =>{
        this.errorInCourse = data["err"];
        if(!this.errorInCourse){
          // this.display(true);
          this.messageService.filter(this.configService.MSG_SHOW_COURSES);
        }
      })
    }
  }
  private getMyCourses(){
    // todo
    // console.log("TO IMPLEMENT course.component / getMyCourses()")
    this.messageService.filter(this.configService.MSG_SHOW_MYCOURSES); /** inform mycourses component to do job */
  }

  private mock_course():void{
    this.courses.push(
      {
      "students": [
        "5abea387729b162350860c15",
        "5abea794c85f2b199c72a785",
        "5abf131e6bcff834d450c951"
    ],
    "_id": "5abf03309004920700b40ab6",
    "code": "COMP200",
    "name": "Programing 2",
    "section": "1",
    "semester": "2",
    });

    this.courses.push({
      "students": [],
      "_id": "5abf033c9004920700b40ab7",
      "code": "COMP300",
      "name": "Programing 3",
      "section": "1",
      "semester": "3"
  })
  }
}

interface Course{
  _id?:string;
  code?:string;
  name?:string;
  section?:string;
  semester?:string; 
  students?:string[]
}
