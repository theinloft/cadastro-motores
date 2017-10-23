import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaMotoresComponent } from './tabela-motores.component';

describe('TabelaMotoresComponent', () => {
  let component: TabelaMotoresComponent;
  let fixture: ComponentFixture<TabelaMotoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaMotoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaMotoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
