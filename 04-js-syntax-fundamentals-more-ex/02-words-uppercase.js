function extractAndUpper(text) {
    let words = [];
    let currentWord = "";

    for (let char of text) {
        if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z") || (char >= "0" && char <= "9")
        ) {
            currentWord += char;
        } else {
            if (currentWord !== "") {
                words.push(currentWord);
                currentWord = "";
            }
        }
    }

    if (currentWord !== "") {
        words.push(currentWord);
    }

    console.log(words.map(w => w.toUpperCase()).join(", "));
}