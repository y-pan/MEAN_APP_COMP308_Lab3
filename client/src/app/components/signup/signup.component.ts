import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MessageService } from '../../services/message.service';
import { ConfigService } from '../../services/config.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // rForm: FormGroup;
  toDisplaySignUp:boolean;
  student:Student;
  signUpErrs:any;

  isSubmitDisabled:boolean; /** to disable submit button when 2 passwords don't match */

  constructor(
    private dataService:DataService
    , private fb:FormBuilder
    , private messageService: MessageService
    , private configService: ConfigService
  ) {
    // this.rForm = fb.group({
    //   'studentnumber':[null, Validators.required],
    //   'password':[null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(18)])],
    //   'firstname':[null, Validators.required],
    //   'lastname':[null, Validators.required],
    //   'email':[null, Validators.compose([Validators.required, Validators.email])],
    //   'address':[null],
    //   'city':[null],
    //   'phone':[null],
    // })

    this.messageService.listen().subscribe((msg:any) =>{
      switch(msg){
        case this.configService.MSG_SHOW_SIGNUP:
          this.display(true);break;
        default:
          this.display(false);break;
      }
    });
    
   }

  ngOnInit() {
    // this.display(false);
    this.isSubmitDisabled = true;
    this.signUpErrs = [];
    this.student = {
      studentnumber:"",
      password:"",
      passwordAgain:"",
      firstname:"",
      lastname:"",
      email:"",

      address:"",
      city:"",
      phone:"",
      program:""
    }

    // this.mock_user();
  }
  display(toDisplay:boolean){
    this.toDisplaySignUp = toDisplay;
  }

  
  match2Passwords() {
    if(this.student.password == "" ||this.student.passwordAgain == "" ||  this.student.password !=  this.student.passwordAgain){
      this.isSubmitDisabled = true;
    }else{     
      this.isSubmitDisabled = false;
    }
  }

  mock_user(){
    this.student = {
      studentnumber:"400000001",
      password:"Aa!123456",
      passwordAgain:"Aa!123456",
      firstname:"firstname41",
      lastname:"lastname41",
      email:"email41@gmail.com",
      
      address:"123 main ave",
      city:"Toronto",
      phone:"6470000001",
      program:"Software Engineering"
    }
  }
  onSubmit(){
    if(this.student.password != this.student.passwordAgain){
      this.signUpErrs = ["Passwords didn't match!"];
      return;
    }
    this.dataService.signup(this.student).subscribe(data => {
      this.signUpErrs = [];
      console.log("err...")
      console.log(data["err"])
      console.log("data...")
      console.log(data["data"])

      if(data["err"]){
        let dbErr = data["err"];
        if(dbErr["errmsg"]){
          this.signUpErrs.push(dbErr["errmsg"]);
        }else{
          if(dbErr instanceof Object){

          }else{
            this.signUpErrs.push(dbErr)
          }
        }

        let errors = data["err"]["errors"]; /** validation errors */
        for(var prop in errors){
          if(errors.hasOwnProperty(prop)){
            this.signUpErrs.push(errors[prop]["message"]);
          }
        }
      }else{
        // console.log("data...")
        // console.log(data["data"]);
        if(!data["data"]){
          this.signUpErrs.push('Unknow error occurred!')
        }else{
          this.dataService.setStudent(data["data"]);
          this.messageService.filter(this.configService.MSG_USER_LOGGEDIN);
          this.messageService.filter(this.configService.MSG_SHOW_PROFILE); /** PROFILE is Home */
        }
        
      }
      
    })

  }
}

interface Student{
  studentnumber:string;
  password:string;
  passwordAgain:string;
  firstname:string;
  lastname:string;
  email:string;
  
  address:string;
  city:string;
  phone:string;
  program:string;
}
