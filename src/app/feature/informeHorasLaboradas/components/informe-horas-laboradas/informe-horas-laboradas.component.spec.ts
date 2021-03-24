import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeHorasLaboradasComponent } from './informe-horas-laboradas.component';

describe('InformeHorasLaboradasComponent', () => {
  let component: InformeHorasLaboradasComponent;
  let fixture: ComponentFixture<InformeHorasLaboradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformeHorasLaboradasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeHorasLaboradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
