function solve(input) {
    let garages = {};

    for (let line of input) {
        let [garagePart, carPart] = line.split(" - ");
        let garageNumber = garagePart;

        let carInfo = carPart
            .split(", ")
            .map(x => x.split(": "))
            .map(([key, value]) => `${key} - ${value}`)
            .join(", ");

        if (!garages[garageNumber]) {
            garages[garageNumber] = [];
        }

        garages[garageNumber].push(carInfo);
    }

    let sortedGarages = Object.keys(garages)
        .sort((a, b) => a - b);

    for (let garage of sortedGarages) {
        console.log(`Garage № ${garage}`);

        for (let car of garages[garage]) {
            console.log(`--- ${car}`);
        }
    }
}