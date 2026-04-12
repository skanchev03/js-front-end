function phoneBook(stringArray) {
    let phoneBook = {};

    for (let entry of stringArray) {
        let [firstName, phone] = entry.split(" ");
        phoneBook[firstName] = phone;
    }

    let entries = Object.entries(phoneBook);

    for (let [firstName, phone] of entries) {
        console.log(`${firstName} -> ${phone}`);
    }
}