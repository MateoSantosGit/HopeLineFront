import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Doctor} from "../model/doctor";
import {Observable} from "rxjs";
import {Paciente} from "../model/paciente";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _url : string = 'http://localhost:8080/'

  constructor(private http:HttpClient) { }

  createDoctor(doctor:Doctor): Observable<Doctor> {
    return this.http.post(this._url + 'registerNewUser/Doctor', doctor)
  }

  createPaciente(paciente:Paciente): Observable<Paciente> {
    return this.http.post(this._url + 'registerNewUser/Paciente', paciente)
  }

  // getToken() : string | null {
  //   return localStorage.getItem('token') || null
  // }
  //
  // getAuthHeader(): object {
  //   return {headers: { 'Authorization': 'Bearer ' + this.getToken()} }
  // }

  // login(username: string, password: string): Observable<ResponseLoginDTO> {
  //   return this.http.post<ResponseLoginDTO>(this._url + 'auth/login', {username: username, password: password})
  // }

}
