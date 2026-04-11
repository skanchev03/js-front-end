function solve(gramsOfGold) {
    const priceOfBitcoin = 11949.16;
    const goldGramPrice = 67.51;
    let bitcoins = 0;
    let firstBitcoin = false;
    let firstBitcoinDay = 0;
    let money = 0;
    let day = 1;
    let totalDays = gramsOfGold.length;

    for (day; day <= totalDays; day++) {
        let todaysGold = gramsOfGold[day - 1];
        if (day % 3 === 0) {
            todaysGold *= 0.7
        }
        money += todaysGold * goldGramPrice;
        while (money > priceOfBitcoin) {
            bitcoins += 1;
            money -= priceOfBitcoin;
            if (!firstBitcoin) {
                firstBitcoin = true;
                firstBitcoinDay = day;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (firstBitcoin) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}