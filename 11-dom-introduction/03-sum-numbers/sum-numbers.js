function calc() {
    let num1InputEl = document.querySelector("#num1");
    let num2InputEl = document.querySelector("#num2");
    let sumInputEl = document.querySelector("#sum");

    let num1 = Number(num1InputEl.value);
    let num2 = Number(num2InputEl.value);

    let sum = num1 + num2;
    sumInputEl.value = sum;
}