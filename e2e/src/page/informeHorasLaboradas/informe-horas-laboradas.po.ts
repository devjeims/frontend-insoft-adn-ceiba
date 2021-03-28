import { by, element } from 'protractor';

export class InformeHorasLaboradasPage {
    private linkListarInformeMensual = element(by.id('linkListarInformeMensual'));
    private listaInformeMensual = element.all(by.css('table.dataSourceInformeMensual td'));

    async clickBotonListarIngresosEmpleados() {
        await this.linkListarInformeMensual.click();
    }

    async contarInformeMensual() {
        return this.listaInformeMensual.count();
    }
}