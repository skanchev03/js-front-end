function solve(input) {
    let parking = new Set();

    for (let line of input) {
        let [direction, carNumber] = line.split(", ");

        if (direction === "IN") {
            parking.add(carNumber);
        } else if (direction === "OUT") {
            parking.delete(carNumber);
        }
    }

    let cars = Array.from(parking).sort();

    if (cars.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(cars.join("\n"));
    }
}