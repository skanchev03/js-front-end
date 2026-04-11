function areaCalculator(radius) {
    if (typeof radius === "number") {
        const area = Math.PI * radius ** 2;
        return area.toFixed(2);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    }
}