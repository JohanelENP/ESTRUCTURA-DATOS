// ==========================================
// SECCIÓN 1: Calentamiento Numérico
// ==========================================

// Ejercicio 1.1: Suma de Dígitos de un Número
function sumaDigitos(n) {

    if (n < 10) return n;
    
    return (n % 10) + sumaDigitos(Math.floor(n / 10));
}

console.assert(sumaDigitos(1243) === 10, "Error en sumaDigitos(1243)");
console.assert(sumaDigitos(0) === 0, "Error en sumaDigitos(0)");
console.assert(sumaDigitos(9) === 9, "Error en sumaDigitos(9)");
console.log("Ejercicio 1.1 superado.");

// Ejercicio 1.2: Potencia Recursiva (Exponenciación Binaria)
function potencia(base, exponente) {

    if (exponente === 0) return 1;

    let mitad = potencia(base, Math.floor(exponente / 2));
    
    if (exponente % 2 === 0) {

        return mitad * mitad;
    } else {

        return base * mitad * mitad;
    }
}

console.assert(potencia(2, 10) === 1024, "Error en potencia(2, 10)");
console.assert(potencia(5, 3) === 125, "Error en potencia(5, 3)");
console.assert(potencia(7, 0) === 1, "Error en potencia(7, 0)");
console.log("Ejercicio 1.2 superado.");


// ==========================================
// SECCIÓN 2: Recursividad en Estructuras Lineales
// ==========================================

// Ejercicio 2.1: Inversión de un Arreglo (In-Place)
function invertirArreglo(arr, inicio, fin) {

    if (inicio >= fin) return;

    let temp = arr[inicio];
    arr[inicio] = arr[fin];
    arr[fin] = temp;

    invertirArreglo(arr, inicio + 1, fin - 1);
}

let miLista = [10, 20, 30, 40, 50];
invertirArreglo(miLista, 0, miLista.length - 1);
console.assert(JSON.stringify(miLista) === JSON.stringify([50, 40, 30, 20, 10]), "Error en invertirArreglo");
console.log("Ejercicio 2.1 superado.");

// Ejercicio 2.2: Búsqueda Binaria Recursiva
function busquedaBinariaRecursiva(arr, objetivo, bajo, alto) {

    if (bajo > alto) return -1;

    let medio = Math.floor((bajo + alto) / 2);

    if (arr[medio] === objetivo) return medio;

    if (arr[medio] > objetivo) {
        return busquedaBinariaRecursiva(arr, objetivo, bajo, medio - 1);
    } else {
        return busquedaBinariaRecursiva(arr, objetivo, medio + 1, alto);
    }
}

const datosOrdenados = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.assert(busquedaBinariaRecursiva(datosOrdenados, 23, 0, 9) === 5, "Error en búsqueda de 23");
console.assert(busquedaBinariaRecursiva(datosOrdenados, 100, 0, 9) === -1, "Error en búsqueda de 100");
console.log("Ejercicio 2.2 superado.");


// ==========================================
// SECCIÓN 3: Estructuras No Lineales
// ==========================================

class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

// Recorrido Inorden: Izquierdo -> Raíz -> Derecho
function recorridoInorden(raiz) {

    if (raiz === null) return [];

    return [
        ...recorridoInorden(raiz.izquierdo),
        raiz.valor,
        ...recorridoInorden(raiz.derecho)
    ];
}

// Recorrido Preorden: Raíz -> Izquierdo -> Derecho
function recorridoPreorden(raiz) {

    if (raiz === null) return [];

    return [
        raiz.valor,
        ...recorridoPreorden(raiz.izquierdo),
        ...recorridoPreorden(raiz.derecho)
    ];
}

// Recorrido Postorden: Izquierdo -> Derecho -> Raíz
function recorridoPostorden(raiz) {

    if (raiz === null) return [];

    return [
        ...recorridoPostorden(raiz.izquierdo),
        ...recorridoPostorden(raiz.derecho),
        raiz.valor
    ];
}

let raiz = new NodoArbol(1);
raiz.izquierdo = new NodoArbol(2);
raiz.derecho = new NodoArbol(3);
raiz.izquierdo.izquierdo = new NodoArbol(4);
raiz.izquierdo.derecho = new NodoArbol(5);

console.assert(JSON.stringify(recorridoInorden(raiz)) === JSON.stringify([4, 2, 5, 1, 3]), "Error Inorden");
console.assert(JSON.stringify(recorridoPreorden(raiz)) === JSON.stringify([1, 2, 4, 5, 3]), "Error Preorden");
console.assert(JSON.stringify(recorridoPostorden(raiz)) === JSON.stringify([4, 5, 2, 3, 1]), "Error Postorden");
console.log("Ejercicio 3.1 superado.");
