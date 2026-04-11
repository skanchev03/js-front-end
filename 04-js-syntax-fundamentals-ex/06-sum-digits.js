function sumDigits(number) {
    let result = 0;

    let digits = String(number);

    for (let digit of digits) {
        result += Number(digit);
    }

    console.log(result);
}