export class InformeMensual {
    id: string;
    nombreEmpleado: string;
    mes: string;
    horasLaboradas: string;
    pago: string;

    constructor(id: string, nombreEmpleado: string, mes: string, horasLaboradas: string, pago:string) {
        this.id = id;
        this.nombreEmpleado = nombreEmpleado;
        this.mes = mes;
        this.horasLaboradas = horasLaboradas;
        this.pago = pago;
    }
}