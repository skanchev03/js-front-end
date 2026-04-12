function addressBook(input) {
    let book = {};

    for (let entry of input) {
        let [name, address] = entry.split(":");
        book[name] = address;
    }

    let sortedNames = Object.keys(book).sort();

    for (let name of sortedNames) {
        console.log(`${name} -> ${book[name]}`);
    }
}