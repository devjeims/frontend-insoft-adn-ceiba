import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { IngresoEmpleadoService } from '../../shared/service/ingreso-empleado.service';

@Component({
  selector: 'app-listar-ingreso-empleado',
  templateUrl: './listar-ingreso-empleado.component.html',
  styleUrls: ['./listar-ingreso-empleado.component.css']
})
export class ListarIngresoEmpleadoComponent implements OnInit {
  displayedColumns =
  [ 'numeroDocumento',
    'fechaIngreso',
    'horaIngreso',
    'horaSalida'
  ];

  dataSourceIngresoEmpleados = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(protected ingresoEmpleadoService: IngresoEmpleadoService) { }

  ngOnInit() {
    this.ingresoEmpleadoService.consultarIngresos().subscribe(ingresos => {
      this.dataSourceIngresoEmpleados.data = ingresos;
      this.enablePaginator();
    }, error => {
      console.log(error.error.mensaje);
    });
  }

  enablePaginator() {
    this.paginator._intl.itemsPerPageLabel = 'Registos por página';
    this.paginator._intl.nextPageLabel = 'Página Siguiente';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.firstPageLabel = 'Primera página';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.dataSourceIngresoEmpleados.paginator = this.paginator;
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceIngresoEmpleados.filter = filterValue.trim().toLowerCase();
    }

}
