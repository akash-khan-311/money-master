function getInput(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldString = inputField.value;
  const inputValue = parseFloat(inputFieldString);
  return inputValue;
}

function getElementById(elementId) {
  const elementFeild = document.getElementById(elementId);
  const elementFeildString = elementFeild.innerText;
  const elementFeildValue = parseFloat(elementFeildString);
  return elementFeild;
}
