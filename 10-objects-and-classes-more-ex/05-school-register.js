function solve(input) {
    let classes = {};

    for (let line of input) {
        let tokens = line.split(", ");

        let name = tokens[0].split(": ")[1];
        let grade = Number(tokens[1].split(": ")[1]);
        let score = Number(tokens[2].split(": ")[1]);

        if (score < 3) {
            continue;
        }

        let nextGrade = grade + 1;

        if (!classes[nextGrade]) {
            classes[nextGrade] = {
                students: [],
                scores: []
            };
        }

        classes[nextGrade].students.push(name);
        classes[nextGrade].scores.push(score);
    }

    let sortedGrades = Object.keys(classes)
        .map(Number)
        .sort((a, b) => a - b);

    for (let grade of sortedGrades) {
        let group = classes[grade];

        let avg =
            group.scores.reduce((a, b) => a + b, 0) /
            group.scores.length;

        console.log(`${grade} Grade`);
        console.log(`List of students: ${group.students.join(", ")}`);
        console.log(`Average annual score from last year: ${avg.toFixed(2)}`);
        console.log("");
    }
}