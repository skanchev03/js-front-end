function solve(baseWidth, increment) {
    let layer = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;

    while (baseWidth > 2) {
        layer++;

        let inner = (baseWidth - 2) * (baseWidth - 2);
        let outer = baseWidth * baseWidth - inner;

        stone += inner * increment;

        if (layer % 5 === 0) {
            lapis += outer * increment;
        } else {
            marble += outer * increment;
        }

        baseWidth -= 2;
    }

    layer++;
    let gold = baseWidth * baseWidth * increment;

    let height = layer * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}