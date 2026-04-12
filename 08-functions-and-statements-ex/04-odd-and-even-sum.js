function oddEvenSum(number) {
    let evenSum = 0;
    let oddSum = 0;

    for (let digit of number.toString()) {
        if (Number(digit) % 2 === 0) {
            evenSum += Number(digit);
        } else {
            oddSum += Number(digit);
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}