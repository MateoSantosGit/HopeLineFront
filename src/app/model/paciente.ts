export class Paciente{
  id?:string;
  name?:string;
  apellido?:string;
  email?:string;
  password?:string;
  edad?: number;

  constructor(name:string, apellido:string, email:string, password:string, edad:number) {
    this.name=name
    this.apellido=apellido
    this.email=email
    this.edad=edad
    this.password=password
  }
}
