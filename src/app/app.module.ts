import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";  
import { ListEmpComponent } from './list-emp/list-emp.component';  
import { AddEmpComponent } from './add-emp/add-emp.component';  
import { EmployeeService } from './service/employee.service';  

@NgModule({
  declarations: [  
    AppComponent,  
    ListEmpComponent,  
    AddEmpComponent  
  ],  
  imports: [
    BrowserModule,  
    HttpClientModule,  
    AppRoutingModule,  
    ReactiveFormsModule
  ],
  providers: [EmployeeService],  
  bootstrap: [AppComponent]  
})
export class AppModule { }

  