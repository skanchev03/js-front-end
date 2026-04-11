function solve(text) {
    let words = [];
    let word = "";

    for (let char of text) {
        if (char === char.toUpperCase() && word !== "") {
            words.push(word);
            word = char;
        } else {
            word += char;
        }
    }

    words.push(word);

    console.log(words.join(", "));
}