import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormMotoresComponent } from './form-motores/form-motores.component';
import { TabelaMotoresComponent } from "./tabela-motores/tabela-motores.component";
import { MotorService } from "./motor.service";
import { MoedaPipe } from './moeda.pipe';
import { VendaMotoresComponent } from './venda-motores/venda-motores.component';
import { ListaVendasComponent } from './lista-vendas/lista-vendas.component';
import { VendaService } from "./venda.service";

const rotas:Routes= [
  {path: "tabela", component:TabelaMotoresComponent},
  {path: "form", component:FormMotoresComponent},
  {path: "venda", component:VendaMotoresComponent},
  {path: "relatorio", component:ListaVendasComponent},
  {path: '', redirectTo: '/tabela', pathMatch: 'full'
  },
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    TabelaMotoresComponent,
    FormMotoresComponent,
    MoedaPipe,
    VendaMotoresComponent,
    ListaVendasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [MotorService, VendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
