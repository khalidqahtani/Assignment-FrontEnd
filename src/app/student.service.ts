import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from './student.model';

const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  addStudent(a): Observable<Student> {
    return this.http.post<Student>('api/addstudent', JSON.stringify(a.value), API_ARGS);
  }
  studentActive(): Observable<Student[]> {
    return this.http.get<Student[]>(`api/allstudent`);
  }
  studentUnActive(): Observable<Student[]> {
    return this.http.get<Student[]>(`api/allstudentDeleted`);
  }
  update(a, sid: number): Observable<Student> {
    return this.http.put<Student>(`api/update/` + `${sid}`, JSON.stringify(a.value), API_ARGS);
  }
  deleteStudent(sid: number): Observable<Student> {
    return this.http.delete<Student>(`api/delete/` + `${sid}`);
  }
  UndeleteStudent(sid: number): Observable<Student> {
    return this.http.delete<Student>(`api/undelete/` + `${sid}`);
  }

  getStudent(sid: number): Observable<Student> {
    return this.http.get<Student>(`api/student/` + `${sid}`);
  }
}
