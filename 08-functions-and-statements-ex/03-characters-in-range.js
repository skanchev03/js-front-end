function charsInRange(char1, char2) {
    let start = char1.charCodeAt(0);
    let end = char2.charCodeAt(0);

    let result = [];

    let min = Math.min(start, end);
    let max = Math.max(start, end);

    for (let i = min + 1; i < max; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(' '));
}