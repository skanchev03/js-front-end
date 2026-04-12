function orderPrice(product, quantity) {
    let totalPrice = 0;

    switch (product) {
        case "coffee":
            totalPrice = 1.5 * quantity;
            break;
        case "water":
            totalPrice = 1 * quantity;
            break;
        case "coke":
            totalPrice = 1.4 * quantity;
            break;
        case "snacks":
            totalPrice = 2 * quantity;
            break;
    }

    console.log(totalPrice.toFixed(2));
}