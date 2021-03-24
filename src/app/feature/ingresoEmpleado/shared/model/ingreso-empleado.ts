export class IngresoEmpleado {
    id: string;
    numeroDocumento: string;
    fechaIngreso: string;
    horaIngreso: string;
    horaSalida: string;

    constructor(id: string, numeroDocumento: string, fechaIngreso: string, horaIngreso: string) {
        this.id = id;
        this.numeroDocumento = numeroDocumento;
        this.fechaIngreso = fechaIngreso;
        this.horaIngreso = horaIngreso;
    }
}
