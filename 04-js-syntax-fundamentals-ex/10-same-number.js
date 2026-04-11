function sameNumber(number) {
    let str = String(Math.abs(number));

    let firstDigit = str[0];
    let isSame = true;
    let result = 0;

    for (let digit of str) {
        if (digit !== firstDigit) {
            isSame = false;
        }
        result += Number(digit);
    }

    console.log(isSame);
    console.log(result);
}