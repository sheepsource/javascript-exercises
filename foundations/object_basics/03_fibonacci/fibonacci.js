const fibonacci = function(n) {
    if (typeof(n) != "number" || n < 0 || isNaN(n)) {
        return "OOPS";
    }
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n-2);
}
// Do not edit below this line
module.exports = fibonacci;
