function radioCrystals(chunks) {
    let target = chunks.shift();

    for (let chunk of chunks) {

        console.log(`Processing chunk ${chunk} microns`);

        let count = 0;
        while (chunk / 4 >= target) {
            chunk /= 4;
            count++;
        }
        if (count > 0) {
            console.log(`Cut x${count}`);
            console.log("Transporting and washing");
            chunk = Math.floor(chunk);
        }

        count = 0;
        while (chunk * 0.8 >= target) {
            chunk *= 0.8;
            count++;
        }
        if (count > 0) {
            console.log(`Lap x${count}`);
            console.log("Transporting and washing");
            chunk = Math.floor(chunk);
        }

        count = 0;
        while (chunk - 20 >= target) {
            chunk -= 20;
            count++;
        }
        if (count > 0) {
            console.log(`Grind x${count}`);
            console.log("Transporting and washing");
            chunk = Math.floor(chunk);
        }

        count = 0;
        while (chunk - 2 >= target - 1) {
            chunk -= 2;
            count++;
        }
        if (count > 0) {
            console.log(`Etch x${count}`);
            console.log("Transporting and washing");
            chunk = Math.floor(chunk);
        }

        if (chunk === target - 1) {
            chunk += 1;
            console.log("X-ray x1");
        }

        console.log(`Finished crystal ${target} microns`);
    }
}