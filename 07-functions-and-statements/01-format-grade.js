function gradeDescription(grade) {
    let description = "";

    switch (true) {
        case grade < 3:
            description = "Fail";
            grade = 2;
            break;
        case grade < 3.5:
            description = "Poor";
            break;
        case grade < 4.5:
            description = "Good";
            break;
        case grade < 5.5:
            description = "Very good";
            break;
        case grade >= 5.5:
            description = "Excellent";
    }

    if (grade < 3) {
        console.log(`${description} (${grade})`);
    } else {
        console.log(`${description} (${grade.toFixed(2)})`);
    }
}