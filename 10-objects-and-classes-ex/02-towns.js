function parseTable(input) {
    for (let row of input) {
        let [town, latitude, longitude] = row.split(" | ").map(x => x.trim());

        let obj = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };

        console.log(obj);
    }
}