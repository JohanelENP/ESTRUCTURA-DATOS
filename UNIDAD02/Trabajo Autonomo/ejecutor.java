public class ejecutor {
    public static void main(String[] args) {
        utilidades u = new utilidades();
        int[] pruebas = {10, 20, 30, 35, 40};

        System.out.println("\nN\tRecursivo(ns)\tMemoizacion(ns)");

        for (int n : pruebas) {
            long inicio = System.nanoTime();
            long resultadoRecursivo = u.fibonacciRecursivo(n);
            long fin = System.nanoTime();
            long tiempoRecursivo = fin - inicio;

            u.limpiarCache();
            inicio = System.nanoTime();

            long resultadoMemo = u.fibonacciMemo(n);
            fin = System.nanoTime();

            long tiempoMemo = fin - inicio;
            System.out.println(
                n + "\t" + tiempoRecursivo + "\t\t" + tiempoMemo
            );
        }
    }
}