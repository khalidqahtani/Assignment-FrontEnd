import { Component, OnInit } from '@angular/core';
import {Student} from '../student.model';
import {StudentService} from '../student.service';


@Component({
  selector: 'app-activestudent',
  templateUrl: './activestudent.component.html',
  styleUrls: ['./activestudent.component.css']
})
export class ActivestudentComponent implements OnInit {
  student$: Student[];
  p = 1;


  constructor(private student: StudentService) { }

  ngOnInit() {
    this.studentActive();
  }

  studentActive() {
    this.student.studentActive().subscribe(studentActive => {
        this.student$ = studentActive;
      },
      err => console.log(err),
    );
  }
  deleteStudent(sid: number) {
    this.student.deleteStudent(sid).subscribe(del => this.ngOnInit(),
    );
  }

}
