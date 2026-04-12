function solve(input) {
    let products = [];

    for (let line of input) {
        let [name, price] = line.split(" : ");
        products.push({ name, price: Number(price) });
    }

    products.sort((a, b) => a.name.localeCompare(b.name));

    let currentLetter = "";

    for (let product of products) {
        let firstLetter = product.name[0];

        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            console.log(currentLetter);
        }

        console.log(`  ${product.name}: ${product.price}`);
    }
}