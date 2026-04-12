function palindromeIntegers(numbers) {
    for (let number of numbers) {
        let reversed = number.toString().split('').reverse().join('');

        if (number.toString() === reversed) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}