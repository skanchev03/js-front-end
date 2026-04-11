function fruitCalculator(fruit, weight, pricePerKG) {
    weight /= 1000
    let price = weight * pricePerKG
    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}