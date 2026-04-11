function solve(wordInput, text) {
    let words = wordInput.split(", ");
    let sortedWords = words.sort((a, b) => b.length - a.length);

    for (let word of sortedWords) {
        let searchWord = "*".repeat(word.length);
        text = text.replace(searchWord, word);
    }

    return text;
}