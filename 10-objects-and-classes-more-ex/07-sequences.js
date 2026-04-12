function solve(input) {
    let unique = new Map();

    for (let line of input) {
        let arr = JSON.parse(line);

        let sortedKey = [...arr].sort((a, b) => b - a).join("|");

        if (!unique.has(sortedKey)) {
            unique.set(sortedKey, arr);
        }
    }

    let result = Array.from(unique.values());

    result.sort((a, b) => a.length - b.length);

    for (let arr of result) {
        let sortedDesc = [...arr].sort((a, b) => b - a);
        console.log(`[${sortedDesc.join(", ")}]`);
    }
}