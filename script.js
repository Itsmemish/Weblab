// Functionality for Button Click
document.getElementById("clickButton").addEventListener("click", function() {
  const resultElement = document.getElementById("result");

  // Perform a simple calculation and display the result
  const num1 = 5;
  const num2 = 10;
  const sum = num1 + num2;

  resultElement.textContent = The sum of ${num1} and ${num2} is ${sum}.;
});

// Adding Comments
// This script handles a button click event and updates the webpage dynamically.