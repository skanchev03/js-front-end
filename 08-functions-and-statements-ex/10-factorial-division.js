function factorialDivision(num1, num2) {
    function factorialCalculator(num) {
        let result = 1;

        for (let i = 1; i <= num; i++) {
            result *= i;
        }

        return result;
    }

    let factorial1 = factorialCalculator(num1);
    let factorial2 = factorialCalculator(num2);
    let result = factorial1 / factorial2;

    return result.toFixed(2);
}