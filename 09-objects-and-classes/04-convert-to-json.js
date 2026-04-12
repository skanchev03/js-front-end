function convertToJSON(firstName, lastName, hairColor) {
    let personObj = {
        name : firstName,
        lastName : lastName,
        hairColor: hairColor
    }

    let personJSON = JSON.stringify(personObj);

    console.log(personJSON);
}