class ColaCircularAutolavado {
    constructor(capacidad) {
    
        this.capacidad = capacidad;
        this.vehiculos = new Array(capacidad);
 
        this.inicio = -1;
        this.fin = -1;
    }

    estaVacia() {
        return this.inicio === -1;
    }

    estaLlena() {

        return (this.fin + 1) % this.capacidad === this.inicio;
    }

    encolar(placa, modelo) {
        if (this.estaLlena()) {
            console.log(`[Error] Capacidad máxima alcanzada. El vehículo ${placa} debe esperar.`);
            return;
        }

        if (this.estaVacia()) {
            this.inicio = 0;
            this.fin = 0;
        } else {

            this.fin = (this.fin + 1) % this.capacidad;
        }

        this.vehiculos[this.fin] = { placa, modelo };
        console.log(`[Ingreso] Vehículo ${modelo} (${placa}) ingresó en la posición de memoria ${this.fin}.`);
    }

    atender() {
        if (this.estaVacia()) {
            console.log("[Atención] No hay vehículos en la cola del autolavado.");
            return null;
        }

        const vehiculoAtendido = this.vehiculos[this.inicio];
        console.log(`[Lavado] Lavando: ${vehiculoAtendido.modelo} (${vehiculoAtendido.placa}) desde la posición ${this.inicio}.`);

        this.vehiculos[this.inicio] = null;

        if (this.inicio === this.fin) {

            this.inicio = -1;
            this.fin = -1;
        } else {

            this.inicio = (this.inicio + 1) % this.capacidad;
        }

        return vehiculoAtendido;
    }

    mostrarEstadoMemoria() {
        console.log(`\n--- ESTADO DEL SISTEMA ---`);
        console.log(`Puntero Inicio: ${this.inicio} | Puntero Fin: ${this.fin}`);
        console.log("Arreglo:", this.vehiculos);
        console.log(`--------------------------\n`);
    }
}

// --- PRUEBA DEL REQUERIMIENTO (TESTEO DE RECICLAJE DE MEMORIA) ---

const carWash = new ColaCircularAutolavado(3);

carWash.encolar("AAA-001", "Toyota");
carWash.encolar("BBB-002", "Honda");
carWash.encolar("CCC-003", "Ford");

carWash.encolar("DDD-004", "Chevrolet"); 

carWash.mostrarEstadoMemoria();

carWash.atender();
carWash.mostrarEstadoMemoria();

carWash.encolar("EEE-005", "Nissan");
carWash.mostrarEstadoMemoria();