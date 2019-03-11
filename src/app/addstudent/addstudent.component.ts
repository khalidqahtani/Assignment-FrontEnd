import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  myReactiveForm: FormGroup;
  error = '';


  constructor(private formBuilder: FormBuilder,
              private student: StudentService,
              private router: Router) { }

  ngOnInit() {
    this.myReactiveForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gpa: ['', Validators.required],

    });
  }
  onSubmit() {
    this.student.addStudent(this.myReactiveForm).subscribe(
      data => {
      },
      error => this.error = error,
      () => this.router.navigate(['/allstudent'])
    );
  }

}
