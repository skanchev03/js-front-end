function solve(browserObj, actions) {
    let browser = browserObj;

    for (let action of actions) {

        if (action === "Clear History and Cache") {
            browser["Open Tabs"] = [];
            browser["Recently Closed"] = [];
            browser["Browser Logs"] = [];
            continue;
        }

        let [command, site] = action.split(" ");

        if (command === "Open") {
            browser["Open Tabs"].push(site);
            browser["Browser Logs"].push(action);
        }

        else if (command === "Close") {
            let index = browser["Open Tabs"].indexOf(site);

            if (index !== -1) {
                browser["Open Tabs"].splice(index, 1);
                browser["Recently Closed"].push(site);
                browser["Browser Logs"].push(action);
            }
        }
    }

    console.log(browser["Browser Name"]);
    console.log(`Open Tabs: ${browser["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${browser["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${browser["Browser Logs"].join(", ")}`);
}