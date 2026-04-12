function convertToObject(text) {
    let personObj = JSON.parse(text);
    let entries = Object.entries(personObj);

    for (let entry of entries) {
        console.log(`${entry[0]}: ${entry[1]}`);
    }
}