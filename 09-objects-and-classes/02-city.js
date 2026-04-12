function city(cityObject) {
    let entries = Object.entries(cityObject);

    for (let entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}