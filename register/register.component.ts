import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'Register',
  templateUrl: './Register.component.html',
  
})
export class RegisterComponent
{

employeeForm : FormGroup;

    
    
constructor(private router : Router,private fb : FormBuilder){}


  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      UserName : ['' , Validators.required],
      Password : ['' , Validators.required]
    })
  }




onSubmit() : void{

    this.router.navigate(['/quiz']);
  }
  
  
}