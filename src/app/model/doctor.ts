export class Doctor{
  id?:string;
  name?:string;
  apellido?:string;
  email?:string;
  password?:string;
  matricula?:string;

  constructor(name:string, apellido:string, email:string, password:string, matricula:string) {
    this.name=name
    this.apellido=apellido
    this.email=email
    this.matricula=matricula
    this.password=password
  }
}
