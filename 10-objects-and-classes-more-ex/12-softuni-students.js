function solve(input) {
    let courses = {};

    for (let line of input) {

        if (line.includes(":")) {
            let [course, cap] = line.split(": ");
            cap = Number(cap);

            if (!courses[course]) {
                courses[course] = {
                    capacity: 0,
                    students: []
                };
            }

            courses[course].capacity += cap;
        }

        else if (line.includes(" joins ")) {
            let [left, courseName] = line.split(" joins ");

            let match = left.match(/(.+)\[(\d+)\] with email (.+)/);

            let username = match[1];
            let credits = Number(match[2]);
            let email = match[3];

            if (courses[courseName]) {
                if (courses[courseName].students.length < courses[courseName].capacity) {

                    courses[courseName].students.push({
                        username,
                        email,
                        credits
                    });
                }
            }
        }
    }

    let sortedCourses = Object.entries(courses)
        .sort((a, b) => b[1].students.length - a[1].students.length);

    for (let [course, data] of sortedCourses) {

        let freePlaces = data.capacity - data.students.length;

        console.log(`${course}: ${freePlaces} places left`);

        let sortedStudents = data.students
            .sort((a, b) => b.credits - a.credits);

        for (let s of sortedStudents) {
            console.log(`--- ${s.credits}: ${s.username}, ${s.email}`);
        }
    }
}