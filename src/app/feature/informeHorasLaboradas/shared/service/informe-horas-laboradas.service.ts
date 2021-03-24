import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { InformeMensual } from '../model/informe-mensual';

@Injectable({
  providedIn: 'root'
})
export class InformeHorasLaboradasService {

  constructor(protected http: HttpService) {}

  public consultarReporteMensual() {
    return this.http.doGet<InformeMensual[]>(`${environment.endpoint}/reporte-mensual`, this.http.optsName('Listar reporte'));
  }

}
