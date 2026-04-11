function solve(text) {
    let result = [];
    let words = text.split(" ");

    for (let word of words) {
        if (word.startsWith("#") && word.length > 1) {
            let candidate = word.slice(1);
            if (/^[A-Za-z]+$/.test(candidate)) {
                result.push(candidate);
            }
        }
    }

    console.log(result.join("\n"));
}