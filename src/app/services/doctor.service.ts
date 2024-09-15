import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {Doctor} from "../model/doctor";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private api:ApiService) { }

  createDoctor(username:string,lastname:string, email:string, password:string, matricula:string) :Observable<Doctor> {
    let newDoctor: Doctor = new Doctor(username, lastname, email, password, matricula)
    return this.api.createDoctor(newDoctor)

  }
}
