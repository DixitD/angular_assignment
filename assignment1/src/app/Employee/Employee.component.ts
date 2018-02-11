import {Component,OnInit} from '@angular/core';
import{ Employee } from '../models/Employee.model';
@Component({
  selector: 'Employee',
  styleUrls: ['./Employee.component.css'],
  templateUrl: './Employee.html'
})
export class EmployeeComponent implements OnInit{
    
    qualifications:any[];
    Experience:any[]; 
    //languages:any[];
    model=new Employee('','','',null,'','','','','',false,false,false,false,false);
    
    ngOnInit(): void {
        this.qualifications = ['BTech', 'BCA', 'MCA', 'BBA'];
        this.Experience=['Beginner','Moderate','Expert'];
      
      //  this.languages=['C/C++','C#','JAVA','Python','PHP'];
      
    }
    
    onSubmit(value: any)
    {
      console.log(value);
    } 
}
