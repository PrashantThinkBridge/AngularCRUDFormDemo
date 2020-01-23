import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';  
import { EmployeeModule } from '../model/employee/employee.module';  
import { Router } from "@angular/router";
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-list-emp',  
  templateUrl: './list-emp.component.html',  
  styleUrls: ['./list-emp.component.css']  
})
export class ListEmpComponent implements OnInit {

  employees: EmployeeModule[]=[];  
  
  constructor(private empService: EmployeeService, private router: Router, ) { }  
  
  ngOnInit() {  
    this.employees = JSON.parse(localStorage.getItem('form-data'));
  }  
  remove(i) {
    this.employees.splice(i,1); 
    localStorage.setItem('form-data', JSON.stringify(this.employees));
  }
}
