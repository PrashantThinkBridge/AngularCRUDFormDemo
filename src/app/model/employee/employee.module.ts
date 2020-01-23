import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { 
  id?: number;  
    employee_name?: string;  
    employee_salary?: number;  
    employee_age?: number;  
}
