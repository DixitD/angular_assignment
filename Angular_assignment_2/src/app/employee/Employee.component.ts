import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  templateUrl: './Employee.html',
  styleUrls: ['./Employee.component.css']
})

export class EmployeeComponent implements OnInit
{

  codingLanguages: string[] ;
  qualifications: string[] ;
  experience: string[] ;
  e = new Employee();
 
  ngOnInit()
  {
    this.qualifications = ['B.Tech','BBA','BCA','MCA','BCom'];
    this.experience = ['Fresher','Moderate','Expert'];
    this.codingLanguages = ['C/C++','Java','C#','PHP','Python'];
  }
//move employee details from form to localstorage....
  Onsubmit(detail: Employee)
  {
    if(localStorage){ 
      if(localStorage.getItem("count") === null){
   
				localStorage.setItem("user1", JSON.stringify(detail, null, 4));					
      }
      else
      {
				  var a = localStorage.getItem("count");
					var b  = (+a) + 1;
					detail.id = b;
					localStorage.setItem("user"+b, JSON.stringify(detail, null, 4));
					localStorage.setItem("count",b+"");
				}
      }
    }
  }
