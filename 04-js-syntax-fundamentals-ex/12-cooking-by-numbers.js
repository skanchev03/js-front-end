function cookingByNumbers(number, op1, op2, op3, op4, op5) {
    let ops = [op1, op2, op3, op4, op5];

    for (let op of ops) {
        if (op === "chop") {
            number /= 2;
        } else if (op === "dice") {
            number = Math.sqrt(number);
        } else if (op === "spice") {
            number += 1;
        } else if (op === "bake") {
            number *= 3;
        } else if (op === "fillet") {
            number -= number * 0.2;
        }

        console.log(number);
    }
}