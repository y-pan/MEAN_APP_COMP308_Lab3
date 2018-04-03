import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { ConfigService } from '../../services/config.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {

  toDisplayMyCourses: boolean;
  myCourses: any;
  errMyCourses: string;

  constructor(
    private messageService: MessageService
    , private configService: ConfigService
    , private dataService: DataService
  ) {
    this.messageService.listen().subscribe((msg: any) => {
      switch (msg) {
        case this.configService.MSG_SHOW_MYCOURSES:
          this.display(true); 
          break;
        default:
          this.display(false); 
          break;
      }
    })
  }

  ngOnInit() {
    this.errMyCourses = "";
    this.myCourses = [];
  }
  display(toDisplay: boolean) {
    this.toDisplayMyCourses = toDisplay;
    this.myCourses = [];
    if (this.toDisplayMyCourses) {
      let student = this.dataService.getStudent();
      if (student) {
        this.dataService.getMyCourses(student._id).subscribe(data => {
          this.errMyCourses = data["err"];
          this.myCourses = data["data"];
        });
      }else{
        this.errMyCourses = "No student";
        this.myCourses = null;
      }
    }
  }

  drop(courseId:string){
    console.log("to do drop course: " + courseId)
    let student = this.dataService.getStudent();
    this.dataService.dropCourse(student._id, courseId).subscribe(data =>{
      console.log(data)
      /** response is either: { "data": "OK"} or  { "err": "error in dropping course"}*/
      this.errMyCourses = data["err"];
      if(!this.errMyCourses){
        this.display(true);
      }
    });
  }
}
