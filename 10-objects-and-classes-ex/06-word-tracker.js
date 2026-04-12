function solve(input) {
    let searchedWords = input.shift().split(" ");
    let counts = {};

    for (let word of searchedWords) {
        counts[word] = 0;
    }

    for (let word of input) {
        if (counts.hasOwnProperty(word)) {
            counts[word]++;
        }
    }

    let sorted = Object.entries(counts)
        .sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}