import { Component, OnInit } from '@angular/core';

import { IngresoEmpleado } from '../../shared/model/ingreso-empleado';
import { IngresoEmpleadoService } from '../../shared/service/ingreso-empleado.service';

@Component({
  selector: 'app-listar-ingreso-empleado',
  templateUrl: './listar-ingreso-empleado.component.html',
  styleUrls: ['./listar-ingreso-empleado.component.css']
})
export class ListarIngresoEmpleadoComponent implements OnInit {

  public listaIngresoEmpleados: IngresoEmpleado[];

  constructor(protected ingresoEmpleadoService: IngresoEmpleadoService) { }

  ngOnInit() {
    this.ingresoEmpleadoService.consultarIngresos().subscribe(ingresos => {
      this.listaIngresoEmpleados = ingresos;
    });
  }

}
