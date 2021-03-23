import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListarIngresoEmpleadoComponent } from './components/listar-ingreso-empleado/listar-ingreso-empleado.component';
import { IngresoEmpleadoComponent } from './components/ingreso-empleado/ingreso-empleado.component';
import { RegistrarIngresoEmpleadoComponent } from './components/registrar-ingreso-empleado/registrar-ingreso-empleado.component';


const routes: Routes = [
    // { path: '', component: IngresoEmpleadoComponent}
    {
        path: '',
        component: IngresoEmpleadoComponent,
        children: [
        {
            path: 'registrar',
            component: RegistrarIngresoEmpleadoComponent
        },
        {
            path: 'listar',
            component: ListarIngresoEmpleadoComponent
        }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IngresoEmpleadoRoutingModule { }