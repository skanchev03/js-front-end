function printDNA(n) {
    const sequence = "ATCGTTAGGG";
    let index = 0;

    for (let i = 0; i < n; i++) {
        let a = sequence[index % sequence.length];
        let b = sequence[(index + 1) % sequence.length];
        index += 2;

        let line = "";

        if (i % 4 === 0) {
            line = `**${a}${b}**`;
        } else if (i % 4 === 1 || i % 4 === 3) {
            line = `*${a}--${b}*`;
        } else {
            line = `${a}----${b}`;
        }

        console.log(line);
    }
}