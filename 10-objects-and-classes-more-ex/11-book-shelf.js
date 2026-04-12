function solve(input) {
    let shelves = {};

    for (let line of input) {

        if (line.includes(" -> ")) {
            let [id, genre] = line.split(" -> ");

            if (!shelves[id]) {
                shelves[id] = {
                    genre,
                    books: []
                };
            }
        }

        else {
            let [bookInfo, genre] = line.split(", ");
            let [title, author] = bookInfo.split(": ");

            for (let id in shelves) {
                if (shelves[id].genre === genre) {
                    shelves[id].books.push({ title, author });
                }
            }
        }
    }

    let sortedShelves = Object.entries(shelves)
        .sort((a, b) => b[1].books.length - a[1].books.length);

    for (let [id, shelf] of sortedShelves) {

        let sortedBooks = shelf.books
            .sort((a, b) => a.title.localeCompare(b.title));

        console.log(`${id} ${shelf.genre}: ${sortedBooks.length}`);

        for (let book of sortedBooks) {
            console.log(`--> ${book.title}: ${book.author}`);
        }
    }
}