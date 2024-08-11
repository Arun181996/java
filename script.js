let number = parseInt(prompt("Please enter a number between 0 and 1 million:"));

// Function to calculate the sum of numbers up to the given number
function calculateSum(num) {
  return (num * (num + 1)) / 2;
}

// Check if the number is within the valid range
if (number >= 0 && number <= 1000000) {
  let sum = calculateSum(number);
  alert(`Sum of numbers up to ${number} is ${sum}`);
} else {
  alert("Invalid number");
}
