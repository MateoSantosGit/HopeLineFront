import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RegisterComponent} from "./register/register.component";
import {RegisterDoctorComponent} from "./register-doctor/register-doctor.component";
import {RegisterPacienteComponent} from "./register-paciente/register-paciente.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
    children: [
      {
        path: "doctor",
        component: RegisterDoctorComponent
      },
      {
        path: "paciente",
        component: RegisterPacienteComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];
