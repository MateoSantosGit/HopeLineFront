import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {DoctorService} from "../services/doctor.service";

@Component({
  selector: 'app-register-doctor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './register-doctor.component.html',
  styleUrl: './register-doctor.component.css'
})
export class RegisterDoctorComponent implements OnInit{

  constructor(private doctorService:DoctorService) {
  }

  userForm = new FormGroup({
    username:new FormControl('', [Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    matricula:new FormControl('',[Validators.required]),
  })

  ngOnInit() : void{
  }

  register() : void{
    let username=this.userForm.value.username!
    let lastname=this.userForm.value.lastname!
    let email=this.userForm.value.email!
    let password=this.userForm.value.password!
    let matricula=this.userForm.value.matricula!

    this.doctorService.createDoctor(username,lastname,email,password,matricula).subscribe(()=>{

    })

    // this.doctorService.createDoctor(username,lastname, email, password, matricula).subscribe(()=>{
    //   this.loginService.login(username,password).subscribe(()=>{
    //   });
  }

}
