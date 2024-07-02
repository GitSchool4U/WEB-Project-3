// chat gpt script
let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function calculate() {
  try {
    let result = eval(displayValue);
    document.getElementById("display").value = result;
    displayValue = ""; // clear display after calculation
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

// claude script
function appendToDisplayClaude(value) {
  document.getElementById('claude-display').value += value;
}

function clearDisplayClaude() {
  document.getElementById('claude-display').value = '';
}

function backspaceClaude() {
  var display = document.getElementById('claude-display');
  display.value = display.value.slice(0, -1);
}

function factorialClaude() {
  var n = parseInt(document.getElementById('claude-display').value);
  var result = 1;
  for (var i = 2; i <= n; i++)
    result *= i;
  document.getElementById('claude-display').value = result;
}

function calculateClaude() {
  try {
    document.getElementById('claude-display').value = eval(document.getElementById('claude-display').value);
  } catch (error) {
    document.getElementById('claude-display').value = 'Error';
  }
}