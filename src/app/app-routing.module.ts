import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddstudentComponent} from './addstudent/addstudent.component';
import {UnactivestudentComponent} from './unactivestudent/unactivestudent.component';
import {ActivestudentComponent} from './activestudent/activestudent.component';
import {UpdateComponent} from './update/update.component';


const routes: Routes = [
  {path: 'allstudent', component: ActivestudentComponent},
  {path: 'unactivestudent', component: UnactivestudentComponent},
  {path: 'add', component: AddstudentComponent},
  {path: 'update/:sid', component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
