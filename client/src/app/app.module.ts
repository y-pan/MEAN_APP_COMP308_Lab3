import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CourseComponent } from './components/course/course.component';

import { ConfigService} from './services/config.service';
import {DataService} from './services/data.service';
import {MessageService} from './services/message.service';
import { NavComponent } from './components/nav/nav.component';
import { MycoursesComponent } from './components/mycourses/mycourses.component';
import { ArrayContainsPipe } from './array-contains.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    CourseComponent,
    NavComponent,
    MycoursesComponent,
    ArrayContainsPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [DataService, ConfigService, MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
