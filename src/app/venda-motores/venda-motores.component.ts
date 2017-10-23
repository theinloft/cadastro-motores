import { Component, OnInit } from '@angular/core';
import { Venda } from "../venda";
import { VendaService } from "../venda.service";
import { Motor } from "../motor";
import { MotorService } from "../motor.service";

@Component({
  selector: 'app-venda-motores',
  templateUrl: './venda-motores.component.html',
  styleUrls: ['./venda-motores.component.css']
})
export class VendaMotoresComponent implements OnInit {
  venda: Venda;
  motores: Motor[];
  
  constructor(private vendaService: VendaService, private motorService: MotorService) { 
    

  }

  ngOnInit() {
    this.venda = new Venda();
    this.venda.nota = this.vendaService.gerarNumeroNota();
    this.venda.data = new Date();
    this.motores = this.motorService.getMotores();
    
    
  }

  salvarVenda(){
    console.log(this.venda.motor);
    this.vendaService.adicionarVenda(this.venda);
    this.venda = new Venda();
    this.venda.nota = this.vendaService.gerarNumeroNota();
    this.venda.data = new Date();
    this.motores = this.motorService.getMotores();
  }

}
