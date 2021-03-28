import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { InformeHorasLaboradasPage } from '../page/informeHorasLaboradas/informe-horas-laboradas.po';

describe('workspace-project Informe Horas Laboradas', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let informeHorasLaboradas: InformeHorasLaboradasPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        informeHorasLaboradas = new InformeHorasLaboradasPage();
    });

    it('Deberia listar el informe mensual', () => {
        page.navigateTo();
        navBar.clickBotonInformeHorasLaboradas();
        informeHorasLaboradas.clickBotonListarIngresosEmpleados();

        expect(0).toBe(informeHorasLaboradas.contarInformeMensual());
    });
});
