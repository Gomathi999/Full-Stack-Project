import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { CourseComponent } from './course/course.component';


const routes: Routes = [
  {path: 'students', component: StudentListComponent,canActivate:[AuthGaurdService] },
  {path: 'create-student', component: CreateStudentComponent,canActivate:[AuthGaurdService] },
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'update-student/:studentId', component: UpdateStudentComponent,canActivate:[AuthGaurdService] },
  {path: 'student-details/:studentId', component: StudentDetailsComponent,canActivate:[AuthGaurdService] },
  {path: 'logout-page', component: LogoutPageComponent,canActivate:[AuthGaurdService] },
  {path: 'contact-info', component: ContactInfoComponent},
  {path: 'feedback-page', component: FeedbackPageComponent,canActivate:[AuthGaurdService] },
  {path: 'profile-card', component: ProfileCardComponent },
  {path: 'about', component: AboutComponent },
  {path: 'home-page', component: HomePageComponent },
  {path: 'signup', component: SignupPageComponent},
  {path: 'course/:lowerGrade', component: CourseComponent,canActivate:[AuthGaurdService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
