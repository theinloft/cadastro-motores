import { Component, OnInit } from '@angular/core';
import { Venda } from "../venda";
import { VendaService } from "../venda.service";

@Component({
  selector: 'app-lista-vendas',
  templateUrl: './lista-vendas.component.html',
  styleUrls: ['./lista-vendas.component.css']
})
export class ListaVendasComponent implements OnInit {
  vendas: Venda[]=[];
  constructor(private service: VendaService) { 
    
  }

  ngOnInit() {
    this.vendas = this.service.getVendas();
  }

}
