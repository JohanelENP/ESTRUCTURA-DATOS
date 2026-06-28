import java.util.HashMap;

public class utilidades {
    private HashMap<Integer, Long> cache = new HashMap<>();

    // Fibonacci recursivo
    public long fibonacciRecursivo(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
    }

    // Fibonacci con memoria
    public long fibonacciMemo(int n) {
        if (n <= 1) {
            return n;
        }
        if (cache.containsKey(n)) {
            return cache.get(n);
        }
        long resultado = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
        cache.put(n, resultado);
        return resultado;
    }

    public void limpiarCache() {
        cache.clear();
    }
}