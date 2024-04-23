let expression = '';
let history = '';

function appendToDisplay(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(expression);
    if (result !== undefined && result !== null) {
      document.getElementById('display').value = result;
      history += expression + '=' + result + '<br>';
      document.getElementById('history').innerHTML = history;
      expression = '';
    } else {
      document.getElementById('display').value = 'Error';
    }
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function calculatePercentage() {
  try {
    const result = eval(expression) / 100;
    if (result !== undefined && result !== null) {
      document.getElementById('display').value = result;
      history += '(' + expression + '%)=' + result + '<br>';
      document.getElementById('history').innerHTML = history;
      expression = '';
    } else {
      document.getElementById('display').value = 'Error';
    }
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function addDecimal() {
  if (!expression.includes('.')) {
    expression += '.';
    document.getElementById('display').value = expression;
  }
}

function calculateSquareRoot() {
  try {
    const result = Math.sqrt(eval(expression));
    if (result !== undefined && result !== null) {
      document.getElementById('display').value = result;
      history += '√(' + expression + ')=' + result + '<br>';
      document.getElementById('history').innerHTML = history;
      expression = '';
    } else {
      document.getElementById('display').value = 'Error';
    }
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function calculateExponent() {
  try {
    const result = Math.pow(eval(expression), 2);
    if (result !== undefined && result !== null) {
      document.getElementById('display').value = result;
      history += '(' + expression + '^2)=' + result + '<br>';
      document.getElementById('history').innerHTML = history;
      expression = '';
    } else {
      document.getElementById('display').value = 'Error';
    }
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}