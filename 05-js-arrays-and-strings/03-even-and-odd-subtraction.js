function solve(numbers) {
    let evenSum = 0;
    let oddSum = 0;

    for (let num of numbers) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    return evenSum - oddSum;
}