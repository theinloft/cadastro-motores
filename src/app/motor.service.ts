import { Injectable } from '@angular/core';
import { Motor } from "./motor";

@Injectable()
export class MotorService {
  motores:Motor[] = [
    {
      nome: "Modelo Ragon WZ",
      descricao: "Cabeçotes individuais com 4 válvulas por cilindro",
      uso: "veicular",
      preco: 3000.00,
      dataCriacao: new Date("2017-07-02T03:00:00.000Z")
    },
    {
      nome: "Modelo Ragon TY",
      descricao: "Cabeçotes individuais com 3 válvulas por cilindro",
      uso: "veicular",
      preco: 4000.00,
      dataCriacao: new Date("2017-08-02T03:00:00.000Z")
    },
    {
      nome: "Modelo Delta",
      descricao: "Cabeçotes individuais com 3 válvulas por cilindro",
      uso: "veicular",
      preco: 5000.00,
      dataCriacao: new Date("2017-09-02T03:00:00.000Z")
    },
    {
      nome: "Modelo Ragon TY",
      descricao: "Cabeçotes individuais com 3 válvulas por cilindro",
      uso: "veicular",
      preco: 6000.40,
      dataCriacao: new Date("2017-10-02T03:00:00.000Z")
    }

  ];
  constructor() { 
    console.log(this.motores[0].dataCriacao)
    //localStorage.setItem("motores",JSON.stringify(this.motores));
  }

  adicionarMotor(motor: Motor){
    this.motores.push(motor);
    //localStorage.setItem("motores",JSON.stringify(this.motores));
  }

  getMotores(){
    //if(localStorage.getItem("motores"))
    //  this.motores = JSON.parse(localStorage.getItem("motores"));
    return this.motores;
  }
}
