function rotate(numbers, rotations) {
    for (let i = 1; i <= rotations; i++) {
        let number = numbers.shift();
        numbers.push(number);
    }
    return numbers.join(" ");
}