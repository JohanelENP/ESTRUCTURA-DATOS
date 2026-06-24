class ColaPacientes {
    constructor() {
 
        this.pacientes = [];
    }

    encolar(nombre, motivo) {
        this.pacientes.push({ nombre, motivo });
        console.log(`[Registro] ${nombre} ingresó por: ${motivo}`);
    }

    atender() {
        if (this.estaVacia()) {
            console.log("[Atención] No hay pacientes en espera actualmente.");
            return null;
        }

        const pacienteAtendido = this.pacientes.shift();
        console.log(`[Atención] El médico está atendiendo a: ${pacienteAtendido.nombre}`);
        return pacienteAtendido;
    }

    estaVacia() {
        return this.pacientes.length === 0;
    }

    mostrarEspera() {
        console.log("[Estado] Pacientes en cola:", this.pacientes);
    }
}

// --- EJECUCIÓN DEL CASO DE USO ---
const emergencias = new ColaPacientes();

emergencias.encolar("Ana López", "Fiebre alta");
emergencias.encolar("Carlos Pérez", "Corte en el brazo");
emergencias.encolar("Luis Mendoza", "Dificultad para respirar");

emergencias.mostrarEspera();

emergencias.atender();
emergencias.atender(); 
emergencias.mostrarEspera(); 