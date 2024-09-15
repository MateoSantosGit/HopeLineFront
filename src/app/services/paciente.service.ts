import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {Paciente} from "../model/paciente";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private api:ApiService) { }

  createPaciente(username:string,lastname:string, email:string, password:string, edad:number) :Observable<Paciente> {
    let newPaciente: Paciente = new Paciente(username, lastname, email, password, edad)
    return this.api.createPaciente(newPaciente)

  }
}
