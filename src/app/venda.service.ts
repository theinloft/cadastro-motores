import { Injectable } from '@angular/core';
import { Venda } from "./venda";

@Injectable()
export class VendaService {
  autoincrement = 1;
  vendas: Venda[] = [];

  constructor() { 

  }

  adicionarVenda(venda){
    this.vendas.push(venda);
    this.autoincrement++;
  }

  getVendas(){
    return(this.vendas);
  }

  gerarNumeroNota(): number{
    return(this.autoincrement);
  }

}
