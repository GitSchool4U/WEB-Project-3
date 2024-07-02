// chat gpt calculator script
let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    let result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = ''; // clear display after calculation
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

// claude calculator script
function appendToDisplayClaude(value) {
  document.getElementById('claude-display').value += value;
}

function clearDisplayClaude() {
  document.getElementById('claude-display').value = '';
}

function calculateClaude() {
  try {
      document.getElementById('claude-display').value = eval(document.getElementById('claude-display').value);
  } catch (error) {
      document.getElementById('claude-display').value = 'Error';
  }
}
