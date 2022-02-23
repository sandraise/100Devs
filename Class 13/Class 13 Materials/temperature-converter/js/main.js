// get all the elements - #celsiusInput, #convert, #farenheitNumber

// add eventListener - on click, perform convertTemperature

// Declare the variables

// celsiusInput - float (decimal number entered by the user)
// conversionNumber - float (this will be assigned as it's a fixed known number)
// farenheitOutput - float (output generated from calculation)

// farenheitOutput = input * conversionNumber - perform the calculation and store it in the variable

//  - display it to the user

document.querySelector("#convert").addEventListener("click", convertTemp);

function convertTemp() {
  let input = document.querySelector("#celsiusInput").value;

  input = (input * 9) / 5 + 32;

  document.querySelector("#farenheitOutput").innerText = `${input}`;
}
