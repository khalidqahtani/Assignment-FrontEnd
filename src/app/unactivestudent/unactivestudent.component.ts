import { Component, OnInit } from '@angular/core';
import {Student} from '../student.model';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-unactivestudent',
  templateUrl: './unactivestudent.component.html',
  styleUrls: ['./unactivestudent.component.css']
})
export class UnactivestudentComponent implements OnInit {
  student$: Student[];
  p = 1;

  constructor(private student: StudentService) { }

  ngOnInit() {
    this.studentUnActive();
  }
  studentUnActive() {
    this.student.studentUnActive().subscribe(studentUnActive => {
        this.student$ = studentUnActive;
      },
      err => console.log(err),
    );
  }

  UndeleteStudent(sid: number) {
    this.student.UndeleteStudent(sid).subscribe(undelete => this.ngOnInit(),
    );
  }

}
