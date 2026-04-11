function solve(numbers) {
    let result = [];

    numbers.sort((a, b) => a - b);

    while (numbers.length > 0) {
        result.push(numbers.shift()); // smallest

        if (numbers.length > 0) {
            result.push(numbers.pop()); // biggest
        }
    }

    return result;
}