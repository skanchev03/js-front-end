function solve(text) {
    let words = text.toLowerCase().split(" ");
    let counts = new Map();

    for (let word of words) {
        if (!counts.has(word)) {
            counts.set(word, 0);
        }
        counts.set(word, counts.get(word) + 1);
    }

    let result = [];

    for (let [word, count] of counts) {
        if (count % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(" "));
}