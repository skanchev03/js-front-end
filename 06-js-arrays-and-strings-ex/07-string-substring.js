function solve(searchedWord, text) {
    let words = text.split(" ");

    for (let word of words) {
        if (word.toLowerCase() === searchedWord.toLowerCase()) {
            console.log(searchedWord);
            return;
        }
    }

    console.log(`${searchedWord} not found!`);
}