function solve(input) {
    let leaders = {};

    for (let line of input) {

        if (line.includes(" arrives")) {
            let leader = line.split(" arrives")[0];

            if (!leaders[leader]) {
                leaders[leader] = {};
            }
        }

        else if (line.includes(":")) {
            let [leader, armyData] = line.split(": ");
            let [armyName, count] = armyData.split(", ").map(NumberOrString);

            function NumberOrString(x) {
                return isNaN(x) ? x : Number(x);
            }

            if (leaders[leader]) {
                leaders[leader][armyName] = count;
            }
        }

        else if (line.includes("+")) {
            let [armyName, count] = line.split(" + ");
            count = Number(count);

            for (let leader in leaders) {
                if (leaders[leader][armyName] !== undefined) {
                    leaders[leader][armyName] += count;
                }
            }
        }

        else if (line.includes(" defeated")) {
            let leader = line.split(" defeated")[0];
            delete leaders[leader];
        }
    }

    let sortedLeaders = Object.entries(leaders)
        .map(([leader, armies]) => {
            let total = Object.values(armies)
                .reduce((a, b) => a + b, 0);

            return [leader, armies, total];
        })
        .sort((a, b) => b[2] - a[2]);

    for (let [leader, armies, total] of sortedLeaders) {
        console.log(`${leader}: ${total}`);

        let sortedArmies = Object.entries(armies)
            .sort((a, b) => b[1] - a[1]);

        for (let [army, count] of sortedArmies) {
            console.log(`>>> ${army} - ${count}`);
        }
    }
}