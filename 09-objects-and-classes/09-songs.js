function songs(input) {
    let n = input.shift();
    let typeList = input.pop();

    for (let entry of input) {
        let [type, name, time] = entry.split("_");

        if (type === typeList || typeList === "all") {
            console.log(`${name}`);
        }
    }
}