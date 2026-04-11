function sumElements(numbers) {
    let firstElement = numbers.shift();
    let lastElement = numbers.pop();
    return firstElement + lastElement;
}