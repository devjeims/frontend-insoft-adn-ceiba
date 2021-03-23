import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { IngresoEmpleado } from '../model/ingreso-empleado';

@Injectable()
export class IngresoEmpleadoService {

  constructor(protected http: HttpService) {}

  public consultarIngresos() {
    return this.http.doGet<IngresoEmpleado[]>(`${environment.endpoint}/listar-ingresos`, this.http.optsName('Listar ingresos'));
  }
  public registrarIngreso(ingresoEmpleado: IngresoEmpleado) {
    return this.http.doPost<IngresoEmpleado, number>(`${environment.endpoint}/registrar-ingreso`, ingresoEmpleado,
                                                this.http.optsName('Registrar ingreso'));
  }
}