import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InformeHorasLaboradasService } from '../../shared/service/informe-horas-laboradas.service';

@Component({
  selector: 'app-informe-mensual',
  templateUrl: './informe-mensual.component.html',
  styleUrls: ['./informe-mensual.component.css']
})
export class InformeMensualComponent implements OnInit {
  displayedColumns =
  [ 'nombreEmpleado',
    'mes',
    'horasLaboradas',
    'pago'
  ];

  dataSourceInformeMensual = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(protected informeHorasLaboradasService: InformeHorasLaboradasService) { }

  ngOnInit() {
    this.informeHorasLaboradasService.consultarReporteMensual().subscribe(informe => {
      this.dataSourceInformeMensual.data = informe;
      this.enablePaginator();
    });
  }

  enablePaginator() {
    this.paginator._intl.itemsPerPageLabel = 'Registos por página';
    this.paginator._intl.nextPageLabel = 'Página Siguiente';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.firstPageLabel = 'Primera página';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.dataSourceInformeMensual.paginator = this.paginator;
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceInformeMensual.filter = filterValue.trim().toLowerCase();
    }

}
