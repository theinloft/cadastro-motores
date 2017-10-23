import { Component, OnInit } from '@angular/core';
import { Motor } from "../motor";
import { MotorService } from "../motor.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-form-motores',
  templateUrl: './form-motores.component.html',
  styleUrls: ['./form-motores.component.css']
})
export class FormMotoresComponent implements OnInit {
  titulo = "Formulario de Motores";

  motor: Motor;


  constructor(private servico:MotorService, private router:Router) {     
  }

  ngOnInit() {
    this.motor = new Motor();
  }

  salvarMotor(){
    this.servico.adicionarMotor(this.motor);
    this.motor = new Motor();
    this.router.navigate(["/tabela"]);


  }

}
