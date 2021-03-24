import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';
import { InformeMensualComponent } from './feature/informeHorasLaboradas/components/informe-mensual/informe-mensual.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard] },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'ingreso-empleado', loadChildren: () => import('@ingresoEmpleado/ingreso-empleado.module').then(mod => mod.IngresoEmpleadoModule) },
  { path: 'informe-horas-laboradas/mensual', component: InformeMensualComponent, canActivate: [SecurityGuard] },
  //{ path: 'informe-horas-laboradas', loadChildren: () => import('@informeHorasLaboradas/informe-horas-laboradas.module').then(mod => mod.InformeHorasLaboradasModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
