import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student: Student = new Student();
  studentName = '';
  standard = '';
  contactNo = '';
  city = '';
  gender = '';
  dateOfBirth = '';
  email = '';
  constructor(private studentService: StudentService,
    private router: Router) { }
  /* ngOnInit called automatically by angular when component is initialized */
  ngOnInit(): void {
  }
  /* Defining the method for save the student details in student list */
  saveStudent(){
    this.studentService.createStudent(this.student).subscribe( data =>{
      console.log(data);
      this.goToStudentList();
    }
    ,error => console.log(error));
  }

  /* Defining the method for navigate to student list page */
  goToStudentList(){
    this.router.navigate(['/students']);
  }
  
  /* Method for checking the fields are empty or not when we submit a form and showing a popup regarding to that */
  onSubmit(){
    if((this.student.studentName === '') || (this.student.standard === '') || (this.student.contactNo === '') || (this.student.city === '') || (this.student.gender === '') || (this.student.dateOfBirth === '') || (this.student.email === '')){
      let status = confirm("Please fill all the fields");
    }
    else{
    var status= confirm("Do you want to insert student records?");
    if (status == true) {
    var status= confirm("Inserted Successfully!");
    console.log(this.student);
    this.saveStudent();
  }
  }
}  
}
