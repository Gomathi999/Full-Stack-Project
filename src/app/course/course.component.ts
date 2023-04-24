import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{
  isLowerGrade : boolean = true;
  lowGrade = '';

  constructor(private route: ActivatedRoute){ }
  /* ngOnInit called automattically by angular when component is initialized */
  ngOnInit(): void {
    this.lowGrade = this.route.snapshot.params['lowerGrade'];
    console.log("lower grade " +this.lowGrade);
  }
  /* Defining the method for check lower grade. If it is true, then display lower grade cards otherwise display higher grade cards*/
  checkLowerGrade():boolean{
    if(this.lowGrade == 'true'){
      this.isLowerGrade = true;
      console.log("Lower grade");
    }
    else{
      this.isLowerGrade = false;
      console.log("Higher Grade");
    }
    return this.isLowerGrade;
  }
}
