import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkIngresoEmpleado = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkInformeHorasLaboradas = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));

    async clickBotonIngresoEmpleado() {
        await this.linkIngresoEmpleado.click();
    }

    async clickBotonInformeHorasLaboradas() {
        await this.linkInformeHorasLaboradas.click();
    }
}
