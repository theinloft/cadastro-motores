import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVendasComponent } from './lista-vendas.component';

describe('ListaVendasComponent', () => {
  let component: ListaVendasComponent;
  let fixture: ComponentFixture<ListaVendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
