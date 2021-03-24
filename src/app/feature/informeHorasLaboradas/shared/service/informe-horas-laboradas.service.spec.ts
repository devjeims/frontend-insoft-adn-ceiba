import { TestBed } from '@angular/core/testing';

import { InformeHorasLaboradasService } from './informe-horas-laboradas.service';

describe('InformeHorasLaboradasService', () => {
  let service: InformeHorasLaboradasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformeHorasLaboradasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
