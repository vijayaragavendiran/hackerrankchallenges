class Calculator {
    power(n, p) {
        try {
            return (n > 0 && p > 0) ? Math.pow(n, p) : error;
        } catch (e) {
            return 'n and p should be non-negative';
        }
    }

}

const c = new Calculator();

console.log(c.power(2, 4));