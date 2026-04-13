function solve() {
  const textInput = document.getElementById("text");
  const conventionInput = document.getElementById("naming-convention");
  const resultInput = document.getElementById("result");

  const textValue = textInput.value;
  const conventionValue = conventionInput.value;

  let result = "";
  switch (conventionValue) {
    case "Camel Case":
      result = toCamelCase(textValue);
      break;
    case "Pascal Case":
      result = toPascalCase(textValue);
      break
    default:
      result = "Error!";
      break;
  }

  resultInput.textContent = result;

  function toCamelCase(text) {
    const result = text
      .split(" ")
      .map ((word,index) => index === 0 ? word.toLowerCase() : capitalize(word))
      .join("");
    
      return result;
  }

  function toPascalCase(text) {
    const result = text
      .split(" ")
      .map (capitalize)
      .join("");
    
      return result;
  }

  function capitalize(word) {
    const result = `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`;

    return result;
  }
}