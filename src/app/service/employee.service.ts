import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { EmployeeModule } from '../model/employee/employee.module';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }  
  baseUrl: string = 'http://localhost:4200';  
  
  getEmployees() {  
    return this.http.get<EmployeeModule[]>(this.baseUrl);  
  }  
  deleteEmployees(id: number) {  
    return this.http.delete<EmployeeModule[]>(this.baseUrl + id);  
  }  
  createUser(employee:EmployeeModule) {  
    return this.http.post(this.baseUrl, employee);  
  }  
  getEmployeeById(id: number) {  
    return this.http.get<EmployeeModule>(this.baseUrl + '/' + id);  
  }  
  updateEmployee(employee: EmployeeModule) {  
    return this.http.put(this.baseUrl + '/' + employee.id, employee);  
  }  
}
