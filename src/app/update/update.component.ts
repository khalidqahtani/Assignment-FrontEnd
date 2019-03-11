import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Student} from '../student.model';
import {StudentService} from '../student.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  myForm: FormGroup;
  sid: number;
  student$: Student;

  constructor(private formBuilder: FormBuilder,
              private studentServer: StudentService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((value: any) => {
      this.sid = value.sid;
    });
    this.studentServer.getStudent(this.sid).subscribe((value0 => {
      this.student$ = value0;
      this.myForm.patchValue(this.student$ as any);


    }));

    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gpa: ['', Validators.required],
    });

  }
  onSubmit() {
    this.studentServer.update(this.myForm, this.sid).subscribe(res => {
        if (res !== null && res !== undefined) {
          console.log(res);
        }
      }, (error) => console.log(error),
      () => this.router.navigate(['/allstudent'])
    );
  }

}
