import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InformeMensualComponent } from './components/informe-mensual/informe-mensual.component';
import { InformeHorasLaboradasComponent } from './components/informe-horas-laboradas/informe-horas-laboradas.component';


const routes: Routes = [
    {
        path: '',
        component: InformeHorasLaboradasComponent,
        children: [
        {
            path: 'mensual',
            component: InformeMensualComponent
        }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InformeHorasLaboradasRoutingModule { }