function solve(input) {
    let username = input.shift();
    let password = username.split("").reverse().join("");

    let attempts = 0;

    for (let attempt of input) {
        attempts++;

        if (attempt === password) {
            console.log(`User ${username} logged in.`);
            return;
        }

        if (attempts === 4) {
            console.log(`User ${username} blocked!`);
            return;
        }

        console.log("Incorrect password. Try again.");
    }
}