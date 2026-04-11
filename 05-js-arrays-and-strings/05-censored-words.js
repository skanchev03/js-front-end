function solve(text, word) {
    return text.replaceAll(word, "*".repeat(word.length));
}