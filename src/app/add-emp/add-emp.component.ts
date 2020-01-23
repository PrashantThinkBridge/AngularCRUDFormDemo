import { Component, OnInit } from '@angular/core';  
import { FormBuilder, FormGroup, Validators } from "@angular/forms";  
import { EmployeeService } from '../service/employee.service';  
import { Router } from "@angular/router";  
import { EmployeeModule } from '../model/employee/employee.module';
  
@Component({  
  selector: 'app-add-emp',  
  templateUrl: './add-emp.component.html',  
  styleUrls: ['./add-emp.component.css']  
})  
export class AddEmpComponent implements OnInit {  
  
  empformlabel: string = 'Add Employee';  
  empformbtn: string = 'Save';  

  employeesModel: EmployeeModule[]=[];  

  constructor(private formBuilder: FormBuilder, private router: Router, private empService: EmployeeService) {  
  }  
  
  addForm: FormGroup;  
  ngOnInit() {  
  
    this.addForm = this.formBuilder.group({  
      id: ['',[Validators.required]],  
      employee_name: ['', Validators.required],  
      employee_salary: ['', [Validators.required, Validators.maxLength(9)]],  
      employee_age: ['', [Validators.required, Validators.maxLength(3)]]  
    });  
  }  
  onSubmit() {  
    this.employeesModel.push(this.addForm.value);
    this.addForm.reset();
    localStorage.setItem('form-data',JSON.stringify(this.employeesModel));
    // this.employees.push(JSON.parse(localStorage.getItem('form-data')));
    console.log(localStorage);
  }  
}  