import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.regForm = this.fb.group({
      Name:['',[Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
      Mobile:['',[Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      Email:['',[Validators.required ,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Password:['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}')]]
    });
  }

  onSubmit(){
    var userList=JSON.parse(localStorage.getItem("UserList")!);
    if(userList == null) userList = [];
    var newData = {
      Name: this.regForm.get("Name")?.value,
      Mobile: this.regForm.get("Mobile")?.value,
      Email:this.regForm.get("Email")?.value,
      Password:this.regForm.get("Password")?.value,
  };
  userList.push(newData);
    localStorage.setItem("UserList",JSON.stringify(userList));
    this.regForm.reset();
     alert("Record save successfully..!")
  }

}
