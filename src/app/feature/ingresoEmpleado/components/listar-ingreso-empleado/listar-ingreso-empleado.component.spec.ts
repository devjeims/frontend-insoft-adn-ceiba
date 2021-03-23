import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarIngresoEmpleadoComponent } from './listar-ingreso-empleado.component';

describe('ListarIngresoEmpleadoComponent', () => {
  let component: ListarIngresoEmpleadoComponent;
  let fixture: ComponentFixture<ListarIngresoEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarIngresoEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarIngresoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
