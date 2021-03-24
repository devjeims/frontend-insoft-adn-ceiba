import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { InformeMensualComponent } from './components/informe-mensual/informe-mensual.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { InformeHorasLaboradasService } from './shared/service/informe-horas-laboradas.service';
import { InformeHorasLaboradasRoutingModule } from './informe-horas-laboradas-routing.module';
import { InformeHorasLaboradasComponent } from './components/informe-horas-laboradas/informe-horas-laboradas.component';


@NgModule({
    declarations: [
        InformeMensualComponent,
        InformeHorasLaboradasComponent
    ],
    imports: [
        InformeHorasLaboradasRoutingModule,
        SharedModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [InformeHorasLaboradasService]
})
export class InformeHorasLaboradasModule { }