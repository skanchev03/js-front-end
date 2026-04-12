function solve(input) {
    let dictionary = {};

    for (let jsonString of input) {
        let obj = JSON.parse(jsonString);

        let term = Object.keys(obj)[0];
        let definition = obj[term];

        dictionary[term] = definition; // replaces old value if exists
    }

    let sortedTerms = Object.keys(dictionary).sort();

    for (let term of sortedTerms) {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    }
}