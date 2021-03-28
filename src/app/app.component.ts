import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Insoft';
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'Inicio' },
    { url: '/ingreso-empleado', nombre: 'Ingreso empleado'},
    { url: '/informe-horas-laboradas/mensual', nombre: 'Horas laboradas'}
  ];
}
