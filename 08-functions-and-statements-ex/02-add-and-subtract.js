function addAndSubtract(num1, num2, num3) {
    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(sum, num3) {
        return sum - num3;
    }

    let sumResult = add(num1, num2);
    let result = subtract(sumResult, num3);

    console.log(result);
}