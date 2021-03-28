import { Component, OnInit } from '@angular/core';
import { IngresoEmpleado } from '../../shared/model/ingreso-empleado';
import { IngresoEmpleadoService } from '../../shared/service/ingreso-empleado.service';

@Component({
  selector: 'app-registrar-ingreso-empleado',
  templateUrl: './registrar-ingreso-empleado.component.html',
  styleUrls: ['./registrar-ingreso-empleado.component.css']
})
export class RegistrarIngresoEmpleadoComponent implements OnInit {
  ingresoEmpleado: IngresoEmpleado;
  mensajeError = '';

  constructor(protected ingresoEmpleadoService: IngresoEmpleadoService) { }

  ngOnInit(): void {
    this.crearNuevoEmpleado();
  }

  registrarIngreso() {
    this.ingresoEmpleadoService.registrarIngreso(this.ingresoEmpleado).subscribe(() => {
      this.mensajeError = ''
      this.crearNuevoEmpleado();
    }, error => {
      this.mensajeError = error.error.mensaje;
    });
  }

  crearNuevoEmpleado() {
    this.ingresoEmpleado = new IngresoEmpleado(' ');
  }

}
