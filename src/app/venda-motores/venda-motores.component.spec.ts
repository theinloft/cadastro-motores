import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaMotoresComponent } from './venda-motores.component';

describe('VendaMotoresComponent', () => {
  let component: VendaMotoresComponent;
  let fixture: ComponentFixture<VendaMotoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaMotoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaMotoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
