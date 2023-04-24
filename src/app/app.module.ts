import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { FormsModule} from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    StudentListComponent,
    UpdateStudentComponent,
    LoginPageComponent,
    ProfileCardComponent,
    LogoutPageComponent,
    FeedbackPageComponent,
    ContactInfoComponent,
    AboutComponent,
    HomePageComponent,
    SignupPageComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
