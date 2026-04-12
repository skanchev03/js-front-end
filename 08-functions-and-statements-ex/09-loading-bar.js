function loadingBar(number) {
    if (number === 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    } else {
        let percentTimes = number / 10;
        let dotsTimes = 10 - percentTimes;
        console.log(`${number}% [${"%".repeat(percentTimes)}${".".repeat(dotsTimes)}]`);
        console.log("Still loading...");
    }
}