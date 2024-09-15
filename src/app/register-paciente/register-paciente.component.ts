import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-paciente',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register-paciente.component.html',
  styleUrl: './register-paciente.component.css'
})
export class RegisterPacienteComponent {

  userForm = new FormGroup({
    username:new FormControl('', [Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    edad:new FormControl('',[Validators.required]),
  })

  register() : void{

    let username=this.userForm.value.username!
    let lastname=this.userForm.value.lastname!
    let email=this.userForm.value.email!
    let password=this.userForm.value.password!
    let edad=this.userForm.value.edad!

    // this.pacienteService.createPaciente(username,lastname, email, password, matricula).subscribe(()=>{
    //   this.loginService.login(username,password).subscribe(()=>{
    //   });
  }
}
