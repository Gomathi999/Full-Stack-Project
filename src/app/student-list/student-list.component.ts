import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
  students: Student[] = [];
  studentFoundBySearch : Student[] = [];
  firstName: String = '';
  gradeValue : number = 0;

  constructor(private studentService: StudentService,
    private router: Router) { }
    searchByName(){
      this.studentService.findByName(this.firstName).subscribe( data => {
        this.students = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
    }
  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(){
    this.studentService.getStudentsList().subscribe(data => {
      this.students = data;

      //int num[]
      //int num1[]
      //num = num1
    });
  }

  studentDetails(studentId: number){
    this.router.navigate(['student-details', studentId]);
  }

  updateStudent(studentId: number){
    this.router.navigate(['update-student', studentId]);
  }

  deleteStudent(studentId: number){
    this.studentService.deleteStudent(studentId).subscribe( data => {
      console.log(data);
      this.getStudents();
    })
  }
  confirmDelete(student : Student){
    var status= confirm("Do you want to delete this record?");
     if (status==true) {
       this.deleteStudent(student.studentId);
         var status= confirm("Deleted successfully!");
         if (status==true) {
           this.router.navigate(['students']);
            }
          }
     else{
      this.getStudents();
     }
   }
   confirmUpdate(student : Student){
    var status= confirm("Do you want to update this record?");
     if (status==true) {
       this.updateStudent(student.studentId);
          }
     else{
      this.getStudents();
     }
    }

    removeAllStudents(): void{
      var status= confirm("If you click remove all students, it will delete all records from database. Do you really want to delete all records?");
      if (status==true) {
      this.studentService.deleteAll().subscribe(
        data => {
          console.log(data);
          this.getStudents();
          var status= confirm("Deleted successfully!");
        }
        ,
        error => {
          console.log(error);
        }
      );
    }
}

fetchStudentByStandard(standard: any){
  this.gradeValue = standard.target.value;
  console.log(this.gradeValue);
  this.studentService.findByStandard(this.gradeValue).subscribe(
    data => {
      this.students = data;
      console.log(data);
    },
    error => {
      console.log(error);
    }
  )
}
viewCourse(student: Student){
  console.log(student.standard);
  console.log(student.isLowerGrade);
  if(student.standard>=6 && student.standard<=10) {
    student.isLowerGrade = true;
    console.log('studentComponent if condition '+student.isLowerGrade);
    this.router.navigate(['course',true]);
  }
  else{
    student.isLowerGrade = false;
    console.log("studentComponent else condition "+student.isLowerGrade);
    this.router.navigate(['course',false]);
  }
}

}
