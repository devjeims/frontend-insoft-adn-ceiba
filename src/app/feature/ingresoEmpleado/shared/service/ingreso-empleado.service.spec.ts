import { TestBed } from '@angular/core/testing';

import { IngresoEmpleadoService } from './ingreso-empleado.service';

describe('IngresoEmpleadoService', () => {
  let service: IngresoEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngresoEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
