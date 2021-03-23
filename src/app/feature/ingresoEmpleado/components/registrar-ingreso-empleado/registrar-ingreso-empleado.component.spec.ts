import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarIngresoEmpleadoComponent } from './registrar-ingreso-empleado.component';

describe('RegistrarIngresoEmpleadoComponent', () => {
  let component: RegistrarIngresoEmpleadoComponent;
  let fixture: ComponentFixture<RegistrarIngresoEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarIngresoEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarIngresoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
