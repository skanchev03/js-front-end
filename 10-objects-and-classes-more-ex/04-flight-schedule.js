function solve(input) {
    let flights = {};
    let allFlights = input[0];
    let changedFlights = input[1];
    let filterStatus = input[2][0];

    for (let line of allFlights) {
        let [flight, ...destinationParts] = line.split(" ");
        let destination = destinationParts.join(" ");

        flights[flight] = {
            Destination: destination,
            Status: "Ready to fly"
        };
    }

    for (let line of changedFlights) {
        let [flight, status] = line.split(" ");

        if (flights[flight]) {
            flights[flight].Status = status;
        }
    }

    for (let flight in flights) {
        let current = flights[flight];

        if (filterStatus === "Ready to fly") {
            if (current.Status === "Ready to fly") {
                console.log(current);
            }
        } else {
            if (current.Status === filterStatus) {
                console.log(current);
            }
        }
    }
}