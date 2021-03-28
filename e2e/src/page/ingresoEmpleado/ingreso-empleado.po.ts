import { by, element } from 'protractor';

export class IngresoEmpleadoPage {
    private linkRegistrarIngresoEmpleado = element(by.id('linkRegistrarIngresoEmpleado'));
    private linkListarIngresoEmpleado = element(by.id('linkListarIngresoEmpleado'));
    private inputNumeroDocumento = element(by.id('numeroDocumento'));
    private parrafoMensajeError = element.all(by.css('div.mensajeError'));
    private listaIngresosEmpleados = element.all(by.css('table.dataSourceIngresoEmpleados td'));

    async clickBotonCrearIngresoEmpleado() {
        await this.linkRegistrarIngresoEmpleado.click();
    }

    async clickBotonListarIngresosEmpleados() {
        await this.linkListarIngresoEmpleado.click();
    }

    async mostrarMensajeError() {
        return (await this.parrafoMensajeError).toString();
    }

    async ingresarNumeroDocumento(numeroDocumento) {
        await this.inputNumeroDocumento.sendKeys(numeroDocumento);
    }

    async contarIngresosEmpleados() {
        return this.listaIngresosEmpleados.count();
    }
}