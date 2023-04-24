import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  studentId: number = 1;
  student: any = [];
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }
  /* ngOnInit called automatically by angular when component is initialized */
  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['studentId'];
    this.student = new Student();
    this.studentService.getStudentById(this.studentId).subscribe( data => {
    this.student = data;
    });
  }
}
