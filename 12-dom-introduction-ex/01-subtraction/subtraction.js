function subtract() {
    const firstInput = document.getElementById("firstNumber");
    const secondInput = document.getElementById("secondNumber");

    const firstNumber = Number(firstInput.value);
    const secondNumber = Number(secondInput.value);

    const result = firstNumber - secondNumber;

    const resultElement = document.getElementById("result");
    resultElement.textContent = result;
}