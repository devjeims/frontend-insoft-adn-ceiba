import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { IngresoEmpleadoRoutingModule } from './ingreso-empleado-routing.module';
import { IngresoEmpleadoService } from './shared/service/ingreso-empleado.service';
import { ListarIngresoEmpleadoComponent } from './components/listar-ingreso-empleado/listar-ingreso-empleado.component';
import { IngresoEmpleadoComponent } from './components/ingreso-empleado/ingreso-empleado.component';
import { RegistrarIngresoEmpleadoComponent } from './components/registrar-ingreso-empleado/registrar-ingreso-empleado.component';


@NgModule({
    declarations: [
        ListarIngresoEmpleadoComponent,
        RegistrarIngresoEmpleadoComponent,
        IngresoEmpleadoComponent
    ],
    imports: [
        IngresoEmpleadoRoutingModule,
        SharedModule
    ],
    providers: [IngresoEmpleadoService]
})
export class IngresoEmpleadoModule { }