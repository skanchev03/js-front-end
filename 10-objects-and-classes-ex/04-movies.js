function solve(input) {
    let movies = {};

    for (let line of input) {
        if (line.startsWith("addMovie")) {
            let name = line.split("addMovie ")[1];
            movies[name] = { name };
        } 
        else if (line.includes(" directedBy ")) {
            let [name, director] = line.split(" directedBy ");
            if (movies[name]) {
                movies[name].director = director;
            }
        } 
        else if (line.includes(" onDate ")) {
            let [name, date] = line.split(" onDate ");
            if (movies[name]) {
                movies[name].date = date;
            }
        }
    }

    for (let movie of Object.values(movies)) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}