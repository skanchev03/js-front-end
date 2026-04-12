function numberModification(inputNumber) {
    let numbers = inputNumber.toString().split("")
    let sum = 0

    while (true) {
        for (let number of numbers) {
            sum += Number(number);
            if ((sum / numbers.length) > 5) {
                console.log(numbers.join(""));
                return;
            }
        }

        numbers.push("9");
        sum = 0;
    }
}