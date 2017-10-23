import { Component, OnInit } from '@angular/core';
import { Motor } from "../motor";
import { MotorService } from "../motor.service";

@Component({
  selector: 'tabela-motores',
  templateUrl: './tabela-motores.component.html',
  styleUrls: ['./tabela-motores.component.css']
})
export class TabelaMotoresComponent implements OnInit {  
  titulo = "Tabela de Motores";
  motores:Motor[];

  constructor(private motorServico: MotorService) { }

  ngOnInit() {
    this.motores = this.motorServico.getMotores();
  }

}
