function solve(text, word) {
    let words = text.split(" ");
    let count = 0;

    for (let currentWord of words) {
        if (currentWord === word) {
            count++;
        }
    }

    console.log(count);
}