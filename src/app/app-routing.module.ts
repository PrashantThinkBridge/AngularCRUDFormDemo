import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { ListEmpComponent } from './list-emp/list-emp.component';  
import { AddEmpComponent } from './add-emp/add-emp.component';

export const routes: Routes = [  
  { path: '', component: ListEmpComponent, pathMatch: 'full' },  
  { path: 'list-emp', component: ListEmpComponent },  
  { path: 'add-emp', component: AddEmpComponent }  
];  

@NgModule({
  imports: [
    CommonModule,  
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []  
})
export class AppRoutingModule { }
