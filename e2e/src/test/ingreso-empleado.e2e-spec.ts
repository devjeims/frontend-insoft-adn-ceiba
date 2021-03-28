import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { IngresoEmpleadoPage } from '../page/ingresoEmpleado/ingreso-empleado.po';

describe('workspace-project IngresoEmpleado', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let ingresoEmpleado: IngresoEmpleadoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        ingresoEmpleado = new IngresoEmpleadoPage();
    });

    it('Deberia crear ingreso empleado', () => {
        const NUMERO_DOCUMENTO = '1111111111';

        page.navigateTo();
        navBar.clickBotonIngresoEmpleado();
        ingresoEmpleado.clickBotonCrearIngresoEmpleado();
        ingresoEmpleado.ingresarNumeroDocumento(NUMERO_DOCUMENTO);
        expect(ingresoEmpleado.mostrarMensajeError()).toEqual('');
    });

    it('Deberia listar ingreso empleado', () => {
        page.navigateTo();
        navBar.clickBotonIngresoEmpleado();
        ingresoEmpleado.clickBotonListarIngresosEmpleados();

        expect(0).toBe(ingresoEmpleado.contarIngresosEmpleados());
    });
});
