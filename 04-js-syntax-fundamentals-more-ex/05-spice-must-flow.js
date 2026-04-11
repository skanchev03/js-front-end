function spice(yield) {
    let days = 0;
    let totalSpice = 0;

    while (yield >= 100) {
        days++;
        totalSpice += yield - 26;
        yield -= 10;
    }

    if (totalSpice >= 26) {
        totalSpice -= 26;
    } else {
        totalSpice = 0;
    }

    console.log(`${days}`)
    console.log(`${totalSpice}`)
}