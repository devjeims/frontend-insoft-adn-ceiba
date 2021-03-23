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
    this.ingresoEmpleado = new IngresoEmpleado(
      '1', ' ', this.consultarFechaActual(), this.consultarHoraActual()
    );
  }

  consultarFechaActual(): string {
    const currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    const currentDay = new Date().getDay();
    return currentYear + '-' +
          (currentMonth < 10 ? ('0' + currentMonth ) : currentMonth) + '-' +
          (currentDay < 10 ? ('0' + currentDay) : currentDay );
  }

  consultarHoraActual(): string {
    const currentHour = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    const currentSeconds = new Date().getSeconds();
    return currentHour + ':' + currentMinutes +  ':' + currentSeconds;
  }

}
